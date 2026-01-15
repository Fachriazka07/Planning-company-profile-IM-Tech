-- =============================================
-- IM Tech Company Profile - Initial Database Schema
-- Migration: 20260115_initial_schema.sql
-- Database: Supabase PostgreSQL
-- =============================================

-- =============================================
-- 1. PROFILES (extends auth.users)
-- =============================================
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    role VARCHAR(20) NOT NULL DEFAULT 'viewer' 
        CHECK (role IN ('admin', 'editor', 'viewer')),
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.profiles IS 'Extended user profiles with roles';
COMMENT ON COLUMN public.profiles.role IS 'User role: admin, editor, or viewer';

-- =============================================
-- 2. PORTFOLIO CATEGORIES
-- =============================================
CREATE TABLE public.portfolio_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    display_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.portfolio_categories IS 'Categories for portfolio items';

-- =============================================
-- 3. PORTFOLIOS
-- =============================================
CREATE TABLE public.portfolios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES public.portfolio_categories(id) ON DELETE SET NULL,
    created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    images JSONB DEFAULT '[]'::jsonb,
    tech_stack JSONB DEFAULT '[]'::jsonb,
    client_name VARCHAR(255),
    project_url TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'draft' 
        CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at TIMESTAMPTZ
);

COMMENT ON TABLE public.portfolios IS 'Portfolio/project showcase items';
COMMENT ON COLUMN public.portfolios.images IS 'Array of image URLs in JSON format';
COMMENT ON COLUMN public.portfolios.tech_stack IS 'Array of technology names';

-- Indexes
CREATE INDEX idx_portfolios_category_id ON public.portfolios(category_id);
CREATE INDEX idx_portfolios_created_by ON public.portfolios(created_by);
CREATE INDEX idx_portfolios_status ON public.portfolios(status);
CREATE INDEX idx_portfolios_slug ON public.portfolios(slug);

-- =============================================
-- 4. BLOG CATEGORIES
-- =============================================
CREATE TABLE public.blog_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    display_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.blog_categories IS 'Categories for blog posts';

-- =============================================
-- 5. BLOGS
-- =============================================
CREATE TABLE public.blogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES public.blog_categories(id) ON DELETE SET NULL,
    author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    content TEXT,
    featured_image TEXT,
    excerpt VARCHAR(300),
    reading_time INT DEFAULT 0,
    seo_title VARCHAR(60),
    seo_description VARCHAR(160),
    status VARCHAR(20) NOT NULL DEFAULT 'draft' 
        CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at TIMESTAMPTZ
);

COMMENT ON TABLE public.blogs IS 'Blog posts/articles';
COMMENT ON COLUMN public.blogs.reading_time IS 'Estimated reading time in minutes';

-- Indexes
CREATE INDEX idx_blogs_category_id ON public.blogs(category_id);
CREATE INDEX idx_blogs_author_id ON public.blogs(author_id);
CREATE INDEX idx_blogs_status ON public.blogs(status);
CREATE INDEX idx_blogs_slug ON public.blogs(slug);

-- =============================================
-- 6. TAGS
-- =============================================
CREATE TABLE public.tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL UNIQUE,
    slug VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.tags IS 'Tags for blog posts';

-- =============================================
-- 7. BLOG-TAGS JUNCTION
-- =============================================
CREATE TABLE public.blog_tags (
    blog_id UUID NOT NULL REFERENCES public.blogs(id) ON DELETE CASCADE,
    tag_id UUID NOT NULL REFERENCES public.tags(id) ON DELETE CASCADE,
    PRIMARY KEY (blog_id, tag_id)
);

COMMENT ON TABLE public.blog_tags IS 'Many-to-many relationship between blogs and tags';

-- Indexes
CREATE INDEX idx_blog_tags_blog_id ON public.blog_tags(blog_id);
CREATE INDEX idx_blog_tags_tag_id ON public.blog_tags(tag_id);

-- =============================================
-- 8. TEAM MEMBERS
-- =============================================
CREATE TABLE public.team_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    role VARCHAR(100) NOT NULL,
    photo_url TEXT,
    bio TEXT,
    linkedin_url TEXT,
    github_url TEXT,
    twitter_url TEXT,
    display_order INT NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at TIMESTAMPTZ
);

COMMENT ON TABLE public.team_members IS 'Team member profiles displayed on website';

-- Index
CREATE INDEX idx_team_members_display_order ON public.team_members(display_order);

-- =============================================
-- 9. SERVICES
-- =============================================
CREATE TABLE public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(50),
    display_order INT NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.services IS 'Company services offered';

-- Index
CREATE INDEX idx_services_display_order ON public.services(display_order);

-- =============================================
-- 10. CONTACTS
-- =============================================
CREATE TABLE public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    service_interest VARCHAR(255),
    status VARCHAR(20) NOT NULL DEFAULT 'unread' 
        CHECK (status IN ('unread', 'read', 'replied')),
    read_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.contacts IS 'Contact form submissions from website';

-- Indexes
CREATE INDEX idx_contacts_status ON public.contacts(status);
CREATE INDEX idx_contacts_created_at ON public.contacts(created_at DESC);

-- =============================================
-- 11. TRIGGERS: Auto-update updated_at
-- =============================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_portfolios_updated_at
    BEFORE UPDATE ON public.portfolios
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blogs_updated_at
    BEFORE UPDATE ON public.blogs
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_team_members_updated_at
    BEFORE UPDATE ON public.team_members
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_services_updated_at
    BEFORE UPDATE ON public.services
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =============================================
-- 12. TRIGGER: Create profile on user signup
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, name, role)
    VALUES (
        NEW.id, 
        COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)), 
        'viewer'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- 13. ROW LEVEL SECURITY (RLS)
-- =============================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- PROFILES: Users can read their own, admins can read all
CREATE POLICY "Users can view own profile"
ON public.profiles FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
ON public.profiles FOR SELECT
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    )
);

CREATE POLICY "Users can update own profile"
ON public.profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- PORTFOLIOS: Public read published, authenticated full access
CREATE POLICY "Public can view published portfolios"
ON public.portfolios FOR SELECT
USING (status = 'published' AND deleted_at IS NULL);

CREATE POLICY "Authenticated can view all portfolios"
ON public.portfolios FOR SELECT
TO authenticated
USING (deleted_at IS NULL);

CREATE POLICY "Editors can insert portfolios"
ON public.portfolios FOR INSERT
TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
);

CREATE POLICY "Editors can update portfolios"
ON public.portfolios FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
);

CREATE POLICY "Admins can delete portfolios"
ON public.portfolios FOR DELETE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin' AND is_active = true
    )
);

-- PORTFOLIO CATEGORIES: Public read, admin write
CREATE POLICY "Public can view portfolio categories"
ON public.portfolio_categories FOR SELECT
USING (true);

CREATE POLICY "Admins can manage portfolio categories"
ON public.portfolio_categories FOR ALL
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin' AND is_active = true
    )
);

-- BLOGS: Same as portfolios
CREATE POLICY "Public can view published blogs"
ON public.blogs FOR SELECT
USING (status = 'published' AND deleted_at IS NULL);

CREATE POLICY "Authenticated can view all blogs"
ON public.blogs FOR SELECT
TO authenticated
USING (deleted_at IS NULL);

CREATE POLICY "Editors can insert blogs"
ON public.blogs FOR INSERT
TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
);

CREATE POLICY "Editors can update blogs"
ON public.blogs FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
);

CREATE POLICY "Admins can delete blogs"
ON public.blogs FOR DELETE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin' AND is_active = true
    )
);

-- BLOG CATEGORIES: Public read, admin write
CREATE POLICY "Public can view blog categories"
ON public.blog_categories FOR SELECT
USING (true);

CREATE POLICY "Admins can manage blog categories"
ON public.blog_categories FOR ALL
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin' AND is_active = true
    )
);

-- TAGS: Public read, editor write
CREATE POLICY "Public can view tags"
ON public.tags FOR SELECT
USING (true);

CREATE POLICY "Editors can manage tags"
ON public.tags FOR ALL
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
);

-- BLOG_TAGS: Same as tags
CREATE POLICY "Public can view blog_tags"
ON public.blog_tags FOR SELECT
USING (true);

CREATE POLICY "Editors can manage blog_tags"
ON public.blog_tags FOR ALL
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
);

-- TEAM MEMBERS: Public read active, editor write
CREATE POLICY "Public can view active team members"
ON public.team_members FOR SELECT
USING (is_active = true AND deleted_at IS NULL);

CREATE POLICY "Editors can manage team members"
ON public.team_members FOR ALL
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
);

-- SERVICES: Public read active, editor write
CREATE POLICY "Public can view active services"
ON public.services FOR SELECT
USING (is_active = true);

CREATE POLICY "Editors can manage services"
ON public.services FOR ALL
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
);

-- CONTACTS: Public insert, authenticated read
CREATE POLICY "Public can submit contact form"
ON public.contacts FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated can view contacts"
ON public.contacts FOR SELECT
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
);

CREATE POLICY "Editors can update contacts"
ON public.contacts FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
);

-- =============================================
-- END OF MIGRATION
-- =============================================
