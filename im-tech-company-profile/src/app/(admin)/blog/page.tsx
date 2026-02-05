import Link from "next/link";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import type { BlogPost } from "@/types/admin";

// ==========================================
// BACKEND INTEGRATION NOTES (SUPABASE)
// ==========================================
// 1. Create a Supabase client:
//    import { createClient } from "@/lib/supabase/client";
//
// 2. Fetch data (example):
//    const supabase = createClient();
//    const { data: posts, error } = await supabase
//      .from("blog_posts")
//      .select("*, author:users(name)")
//      .order("created_at", { ascending: false });
//
// 3. Replace the 'posts' constant below with the fetched data.
// ==========================================

// Dummy data (REMOVE THIS WHEN CONNECTING TO DB)
const posts: BlogPost[] = [
    {
        id: "1",
        title: "The Future of AI in Web Development",
        slug: "future-of-ai-web-dev",
        excerpt: "Exploring how Artificial Intelligence is reshaping the landscape of modern web development.",
        content: "",
        thumbnail_url: "/placeholder.jpg",
        author_id: "1",
        author: {
            id: "1",
            name: "Ali",
            email: "admin@imtech.com",
            role: "admin",
            is_active: true,
            created_at: "",
            updated_at: ""
        },
        category: "Technology",
        tags: ["AI", "Web Dev", "Trends"],
        status: "published",
        published_at: "2026-02-01",
        views: 1250,
        created_at: "2026-02-01",
        updated_at: "2026-02-01",
    },
    {
        id: "2",
        title: "Understanding Server Components in Next.js 15",
        slug: "understanding-server-components",
        excerpt: "A deep dive into React Server Components and how they improve performance in Next.js 15 applications.",
        content: "",
        thumbnail_url: "/placeholder.jpg",
        author_id: "2",
        author: {
            id: "2",
            name: "Sarah Devi",
            email: "editor@imtech.com",
            role: "editor",
            is_active: true,
            created_at: "",
            updated_at: ""
        },
        category: "Tutorial",
        tags: ["Next.js", "React", "Performance"],
        status: "published",
        published_at: "2026-01-28",
        views: 843,
        created_at: "2026-01-28",
        updated_at: "2026-01-28",
    },
    {
        id: "3",
        title: "5 UI/UX Trends to Watch in 2026",
        slug: "ui-ux-trends-2026",
        excerpt: "Stay ahead of the curve with these emerging design trends that are dominating the digital space.",
        content: "",
        thumbnail_url: "/placeholder.jpg",
        author_id: "3",
        author: {
            id: "3",
            name: "Rian Design",
            email: "design@imtech.com",
            role: "viewer",
            is_active: true,
            created_at: "",
            updated_at: ""
        },
        category: "Design",
        tags: ["UI/UX", "Design", "Inspiration"],
        status: "draft",
        published_at: undefined,
        views: 0,
        created_at: "2026-02-04",
        updated_at: "2026-02-04",
    },
];

export default function BlogPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Blog</h2>
                    <p className="text-slate-500">Manage your blog contents</p>
                </div>
                <Link
                    href="/blog/new"
                    className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add items
                </Link>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search blog posts"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300 transition-all"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-200 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            <th className="px-6 py-4">Title</th>
                            <th className="px-6 py-4">Author</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Published</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {posts.map((post) => (
                            <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm font-medium text-slate-900">
                                        {post.title}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm text-slate-600">
                                        {post.author?.name || "Unknown"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm text-slate-600">
                                        {post.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-3 py-1 bg-black text-white text-xs rounded-full font-medium">
                                        {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm text-slate-600">
                                        {post.published_at ? new Date(post.published_at).toLocaleDateString("en-US", {
                                            month: "numeric",
                                            day: "numeric",
                                            year: "numeric"
                                        }) : "-"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors"
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </Link>
                                        <button className="p-2 border border-slate-200 rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-slate-600 transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
