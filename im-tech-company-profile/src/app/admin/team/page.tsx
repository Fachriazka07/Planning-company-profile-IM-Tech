import Link from 'next/link';
import { Plus, Search, Pencil, Trash2 } from 'lucide-react';
import type { TeamMember } from '@/types/admin';

// ==========================================
// BACKEND INTEGRATION NOTES (SUPABASE)
// ==========================================
// 1. Create a Supabase client:
//    import { createClient } from "@/lib/supabase/client";
//
// 2. Fetch data (example):
//    const supabase = createClient();
//    const { data: members, error } = await supabase
//      .from("team_members")
//      .select("*")
//      .order("order", { ascending: true });
//
// 3. Replace the 'members' constant below with the fetched data.
// ==========================================

// Dummy data (REMOVE THIS WHEN CONNECTING TO DB)
const members: TeamMember[] = [
  {
    id: '1',
    name: 'Aliyudin Saptari',
    position: 'CEO & Founder',
    bio: '',
    avatar_url: '/placeholder-avatar.jpg',
    email: 'aliyudin@example.com',
    phone: '082108123232',
    order: 1,
    is_active: true,
    created_at: '2026-01-01',
    updated_at: '2026-01-01',
  },
  {
    id: '2',
    name: 'Tataq Bayu',
    position: 'Lead Developer',
    bio: '',
    avatar_url: '/placeholder-avatar.jpg',
    email: 'tataq@example.com',
    phone: '08163783870',
    order: 2,
    is_active: true,
    created_at: '2026-01-01',
    updated_at: '2026-01-01',
  },
];

export default function TeamPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Team Members</h2>
          <p className="text-slate-500">Manage your teams</p>
        </div>
        <Link
          href="/team/new"
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
          placeholder="Search team members"
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300 transition-all"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-slate-900">{member.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-slate-600">{member.position}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-slate-600">{member.email || '-'}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-slate-600">{member.phone || '-'}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/team/${member.id}`}
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
