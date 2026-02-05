"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogIn } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // TODO: Integrate with Supabase Auth
        // import { createClient } from "@/lib/supabase/client";
        // const supabase = createClient();
        // const { data, error } = await supabase.auth.signInWithPassword({
        //     email: formData.email,
        //     password: formData.password,
        // });

        // Simulate login and redirect
        setTimeout(() => {
            setIsLoading(false);
            router.push("/dashboard");
        }, 1000);
    };

    return (
        <main className="min-h-screen w-full grid lg:grid-cols-2">
            <div className="hidden lg:block relative">
                <Image
                    src="/assets/pict.png"
                    alt="IM Tech Login Illustration"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 bg-white">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            Get Started
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Enter your credentials to access the dashboard
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-gray-100 border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-gray-100 border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 disabled:bg-black/50 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        >
                            {isLoading ? (
                                <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full" />
                            ) : (
                                <>
                                    <LogIn size={18} />
                                    <span>Sign In</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
