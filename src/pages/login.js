import React, { useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import Link from "next/link";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to your AgentDial account and continue transforming your business with AI-powered voice agents."
            imageSide="left"
        >
            <div className="w-full">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-2">Sign In</h2>
                    <p className="text-muted-foreground">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-accent hover:underline font-medium"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-foreground"
                            >
                                Password
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-sm text-accent hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 text-accent border-border rounded focus:ring-accent focus:ring-2"
                        />
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm text-muted-foreground"
                        >
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

            </div>
        </AuthLayout>
    );
}

