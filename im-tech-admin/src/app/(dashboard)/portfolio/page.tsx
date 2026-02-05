import Link from "next/link";
import { Plus, Search, Pencil, Trash2, Eye } from "lucide-react";
import type { PortfolioProject } from "@/types";

// ==========================================
// BACKEND INTEGRATION NOTES (SUPABASE)
// ==========================================
// 1. Create a Supabase client:
//    import { createClient } from "@/lib/supabase/client";
//
// 2. Fetch data (example):
//    const supabase = createClient();
//    const { data: projects, error } = await supabase
//      .from("portfolio_projects")
//      .select("*")
//      .order("created_at", { ascending: false });
//
// 3. Replace the 'projects' constant below with the fetched data.
// ==========================================

// Dummy data (REMOVE THIS WHEN CONNECTING TO DB)
const projects: PortfolioProject[] = [
    {
        id: "1",
        title: "E-Commerce Platform Redesign",
        slug: "e-commerce-platform",
        description: "Redesign of the main e-commerce platform",
        content: "",
        thumbnail_url: "/placeholder.jpg",
        images: [],
        category: "web",
        client_name: "TechMart Inc.",
        technologies: ["React", "Next.js", "+2"],
        status: "published",
        featured: true,
        order: 1,
        created_at: "2025-12-15",
        updated_at: "2026-01-15",
    },
    {
        id: "2",
        title: "Mobile Banking App",
        slug: "mobile-banking-app",
        description: "Aplikasi mobile banking dengan Flutter",
        content: "",
        thumbnail_url: "/placeholder.jpg",
        images: [],
        category: "mobile",
        client_name: "FinanceFlow",
        technologies: ["React Native", "TypeScript"],
        status: "published",
        featured: true,
        order: 2,
        created_at: "2025-08-30",
        updated_at: "2026-01-10",
    },
];

export default function PortfolioPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Portfolio</h2>
                    <p className="text-slate-500">Manage Your Portfolio Items</p>
                </div>
                <Link
                    href="/portfolio/new"
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
                    placeholder="Search portfolio items"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300 transition-all"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-200 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            <th className="px-6 py-4">Title</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Client</th>
                            <th className="px-6 py-4">Completed</th>
                            <th className="px-6 py-4">Tags</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {projects.map((project) => (
                            <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm font-medium text-slate-900">
                                        {project.title}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm text-slate-600">
                                        {project.category === 'web' ? 'Web Development' :
                                            project.category === 'mobile' ? 'Mobile Development' : 'UI/UX Design'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm text-slate-600">
                                        {project.client_name || "-"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm text-slate-600">
                                        {new Date(project.created_at).toLocaleDateString("en-US", {
                                            month: "numeric",
                                            day: "numeric",
                                            year: "numeric"
                                        })}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex gap-1">
                                        {project.technologies.slice(0, 2).map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 2 && (
                                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium">
                                                +{project.technologies.length - 2}
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link
                                            href={`/portfolio/${project.id}`}
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


