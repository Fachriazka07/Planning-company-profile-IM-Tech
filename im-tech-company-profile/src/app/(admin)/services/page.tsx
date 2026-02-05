import Link from "next/link";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import type { Service } from "@/types/admin";

// ==========================================
// BACKEND INTEGRATION NOTES (SUPABASE)
// ==========================================
// 1. Create a Supabase client:
//    import { createClient } from "@/lib/supabase/client";
//
// 2. Fetch data (example):
//    const supabase = createClient();
//    const { data: services, error } = await supabase
//      .from("services")
//      .select("*")
//      .order("order", { ascending: true });
//
// 3. Replace the 'services' constant below with the fetched data.
// ==========================================

// Dummy data (REMOVE THIS WHEN CONNECTING TO DB)
const services: Service[] = [
    {
        id: "1",
        title: "Web Development",
        slug: "web-development",
        description: "Kami menyediakan layanan pengembangan website yang dirancang sesuai kebutuhan bisnis mulai dari company profile.",
        thumbnail_url: "/placeholder.jpg",
        icon: "Globe",
        features: ["Desain modern & profesional", "Responsif di semua perangkat", "SEO Friendly"],
        order: 1,
        is_active: true,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
    },
    {
        id: "2",
        title: "Mobile App Development",
        slug: "mobile-development",
        description: "Kami mengembangkan aplikasi mobile untuk Android yang dirancang untuk memberikan pengalaman pengguna yang nyaman.",
        thumbnail_url: "/placeholder.jpg",
        icon: "Smartphone",
        features: ["Desain modern & profesional", "Responsif di semua perangkat", "SEO Friendly"],
        order: 2,
        is_active: true,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
    },
    {
        id: "3",
        title: "Design UI/UX",
        slug: "ui-ux-design",
        description: "Kami merancang desain UI/UX yang berfokus pada kenyamanan, kemudahan dan kebutuhan pengguna setiap desain dibuat memikat.",
        thumbnail_url: "/placeholder.jpg",
        icon: "Palette",
        features: ["Desain modern & profesional", "Responsif di semua perangkat", "SEO Friendly"],
        order: 3,
        is_active: true,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
    },
    {
        id: "4",
        title: "Maintenance & Support",
        slug: "maintenance-support",
        description: "Kami menyediakan layanan maintenance dan support untuk memastikan website dan aplikasi tetap berjalan stabil.",
        thumbnail_url: "/placeholder.jpg",
        icon: "Wrench",
        features: ["Desain modern & profesional", "Responsif di semua perangkat", "SEO Friendly"],
        order: 4,
        is_active: true,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
    },
];

export default function ServicesPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Services</h2>
                    <p className="text-slate-500">Manage your services</p>
                </div>
                <Link
                    href="/services/new"
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
                    placeholder="Search services"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300 transition-all"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-200 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            <th className="px-6 py-4">Image</th>
                            <th className="px-6 py-4">Service Name</th>
                            <th className="px-6 py-4">Description</th>
                            <th className="px-6 py-4">Features</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {services.map((service) => (
                            <tr key={service.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="w-16 h-10 bg-slate-100 rounded-md overflow-hidden relative">
                                        {/* Replace with Next/Image in production */}
                                        <div className="w-full h-full bg-slate-200" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm font-medium text-slate-900">
                                        {service.title}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm text-slate-600 line-clamp-2 max-w-xs">
                                        {service.description}
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-1">
                                        {service.features.map((feature, i) => (
                                            <span key={i} className="text-xs text-slate-600 flex items-center gap-1">
                                                <span className="w-1 h-1 bg-slate-400 rounded-full" />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link
                                            href={`/services/${service.id}`}
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
