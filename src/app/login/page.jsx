"use client";

import { useState } from "react";
import { toast } from "react-toastify";

// export const metadata = {
//     title: "Login",
//     description: "Sign in to your account."
// };


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.success("Login Successful 🚀");
        }, 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">

            {/* Card */}
            <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl">

                <form onSubmit={handleLogin} className="p-8 space-y-5">

                    {/* Title */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white">Login</h1>
                        <p className="text-white/80 mt-2">Welcome back 👋</p>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="label text-white">Email</label>
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="input input-bordered w-full bg-white/20 text-white placeholder:text-white/70 border-white/30 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="label text-white">Password</label>

                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="Enter password"
                            className="input input-bordered w-full bg-white/20 text-white placeholder:text-white/70 border-white/30 pr-12 focus:outline-none"
                        />

                        {/* Eye Button */}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[45px] text-white"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex justify-between text-sm text-white">
                        <label className="flex gap-2 cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            Remember me
                        </label>

                        <a className="link link-hover">Forgot password?</a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn w-full bg-white text-black hover:bg-gray-200 border-none"
                    >
                        {loading ? (
                            <span className="loading loading-spinner"></span>
                        ) : (
                            "Login"
                        )}
                    </button>

                    {/* Divider */}
                    <div className="divider text-white">OR</div>

                    {/* Social Login */}
                    <button className="btn btn-outline w-full text-white border-white hover:bg-white hover:text-black">
                        Continue with Google
                    </button>

                    <button className="btn btn-outline w-full text-white border-white hover:bg-white hover:text-black">
                        Continue with Facebook
                    </button>

                    {/* Register */}
                    <p className="text-center text-white text-sm">
                        Don’t have an account?
                        <span className="ml-1 underline cursor-pointer font-semibold">
                            Register
                        </span>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default LoginPage;