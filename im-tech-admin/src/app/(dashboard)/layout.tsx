"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ADMIN_NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-white flex font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed inset-y-0 left-0 z-50">
                {/* Logo */}
                <div className="h-20 flex items-center px-6">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-slate-900">
                            Admin Panel
                        </span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
                    {ADMIN_NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium",
                                    isActive
                                        ? "bg-[#BAD2FF] text-[#1858D2]"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                )}
                            >
                                <span>{item.title}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* User info & Logout */}
                <div className="p-6 mt-auto">
                    <div className="mb-4">
                        <p className="font-semibold text-slate-900">Admin User</p>
                        <p className="text-sm text-slate-500">admin@example.com</p>
                    </div>

                    <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-slate-700 hover:text-red-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col pl-64 transition-all duration-300">
                {/* Top Bar removed as per design preference for cleaner look, strictly speaking the screenshot doesn't show a top bar with title/logout, 
                    but usually we keep it for mobile or breadcrumbs. However, user specifically asked to move logout to bottom left. 
                    I will remove the Logout button from header. I will keep the header for Title context unless instructed otherwise, 
                    but I'll make it cleaner. */}
                {/* Page Content */}
                <main className="flex-1 p-10 bg-white overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
