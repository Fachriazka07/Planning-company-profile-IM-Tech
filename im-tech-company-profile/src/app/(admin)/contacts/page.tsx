import Link from "next/link";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import type { ContactSubmission } from "@/types/admin";

// ==========================================
// BACKEND INTEGRATION NOTES (SUPABASE)
// ==========================================
// 1. Create a Supabase client:
//    import { createClient } from "@/lib/supabase/client";
//
// 2. Fetch data (example):
//    const supabase = createClient();
//    const { data: contacts, error } = await supabase
//      .from("contact_submissions")
//      .select("*")
//      .order("created_at", { ascending: false });
//
// 3. Replace the 'contacts' constant below with the fetched data.
// ==========================================

// Dummy data (REMOVE THIS WHEN CONNECTING TO DB)
const contacts: ContactSubmission[] = [
    {
        id: "1",
        name: "Benjamin",
        email: "benjamin@example.com",
        phone: "081234567890",
        subject: "Inquiry about Web Development Services",
        message: "Kami tertarik untuk membuat website company profile...",
        status: "new",
        created_at: "2026-01-30T10:30:00",
        updated_at: "2026-01-30T10:30:00",
    },
    {
        id: "2",
        name: "Leah Jorge",
        email: "leahjorge@example.com",
        phone: "021-5551234",
        subject: "Inquiry about Mobile Development Services",
        message: "Butuh aplikasi mobile untuk internal management...",
        status: "read",
        created_at: "2026-01-28T14:15:00",
        updated_at: "2026-01-29T09:00:00",
    },
];

export default function ContactsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Contact Submissions</h2>
                    <p className="text-slate-500">View and manage contact form submissions</p>
                </div>
                <Link
                    href="/contacts/new"
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
                    placeholder="Search submissions"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300 transition-all"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-200 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Subject</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {contacts.map((contact) => (
                            <tr key={contact.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm font-medium text-slate-900">
                                        {contact.name}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm text-slate-600">
                                        {contact.email}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm text-slate-600 line-clamp-1 max-w-xs">
                                        {contact.subject}
                                    </p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <StatusBadge status={contact.status} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link
                                            href={`/contacts/${contact.id}`}
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

function StatusBadge({ status }: { status: string }) {
    const classes: Record<string, string> = {
        new: "bg-black text-white",
        read: "bg-slate-400 text-white",
        replied: "bg-green-500 text-white",
        archived: "bg-red-500 text-white",
    };
    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${classes[status] || "bg-slate-100 text-slate-600"}`}>
            {status.toLowerCase()}
        </span>
    );
}
