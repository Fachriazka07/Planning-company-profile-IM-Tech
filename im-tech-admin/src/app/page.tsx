import Link from "next/link";
import { Cog, ShieldCheck, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-block p-4 bg-gray-100 rounded-full mb-6">
          <Cog className="h-12 w-12 text-cyan-600" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Under Construction
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our admin dashboard is currently in development. This page serves as a
          temporary placeholder while our backend services and database are being
          finalized.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/login"
            className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black flex items-center gap-2 transition-colors"
          >
            <span>Admin Login</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Go to Dashboard <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 text-center text-gray-500">
        <div className="flex items-center justify-center gap-2">
          <ShieldCheck size={16} />
          <span>IM Tech Admin Portal</span>
        </div>
        <p className="text-xs mt-1">
          &copy; {new Date().getFullYear()} IM Tech. All rights reserved.
        </p>
      </div>
    </main>
  );
}