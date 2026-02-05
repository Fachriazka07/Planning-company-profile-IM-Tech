import Link from "next/link";
import type { User } from "@/types";

// Dummy data
const users: User[] = [
    {
        id: "1",
        email: "admin@imtech.co.id",
        name: "Admin",
        role: "admin",
        is_active: true,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
    },
    {
        id: "2",
        email: "editor@imtech.co.id",
        name: "Editor",
        role: "editor",
        is_active: true,
        created_at: "2026-01-05",
        updated_at: "2026-01-05",
    },
    {
        id: "3",
        email: "viewer@imtech.co.id",
        name: "Viewer",
        role: "viewer",
        is_active: false,
        created_at: "2026-01-10",
        updated_at: "2026-01-15",
    },
];

export default function UsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Users Management</h2>
                <Link
                    href="/users/new"
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
                >
                    + Add User
                </Link>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-slate-700/50">
                        <tr className="text-left text-slate-400 text-sm">
                            <th className="px-6 py-4 font-medium">User</th>
                            <th className="px-6 py-4 font-medium">Role</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium">Created</th>
                            <th className="px-6 py-4 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-300">
                        {users.map((user) => (
                            <tr key={user.id} className="border-t border-slate-700 hover:bg-slate-700/30">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                                            <span className="text-cyan-400 font-medium">
                                                {user.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">{user.name}</p>
                                            <p className="text-sm text-slate-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <RoleBadge role={user.role} />
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${user.is_active
                                            ? "bg-green-500/20 text-green-400"
                                            : "bg-red-500/20 text-red-400"
                                        }`}>
                                        {user.is_active ? "Active" : "Inactive"}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-slate-500 text-sm">
                                        {new Date(user.created_at).toLocaleDateString("id-ID")}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <Link
                                            href={`/users/${user.id}`}
                                            className="px-3 py-1 text-sm bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
                                        >
                                            Edit
                                        </Link>
                                        <button className="px-3 py-1 text-sm bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded transition-colors">
                                            Delete
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

function RoleBadge({ role }: { role: string }) {
    const classes: Record<string, string> = {
        admin: "bg-purple-500/20 text-purple-400",
        editor: "bg-cyan-500/20 text-cyan-400",
        viewer: "bg-slate-500/20 text-slate-400",
    };
    return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${classes[role]}`}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
        </span>
    );
}
