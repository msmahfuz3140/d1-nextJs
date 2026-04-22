"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    // ✅ Active check function (PRO WAY)
    const isActive = (path) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
        { name: "Dashboard", path: "/dashboard" },
    ];

    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">

            {/* LEFT */}
            <div className="navbar-start">

                {/* MOBILE MENU */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        ☰
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={isActive(link.path) ? "text-primary font-semibold" : ""}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* LOGO */}
                <Link href="/" className="btn btn-ghost text-xl font-bold">
                    🚀 NextBlog
                </Link>
            </div>

            {/* CENTER MENU */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className={`px-3 py-2 rounded-lg transition-all ${isActive(link.path)
                                        ? "bg-primary text-white"
                                        : "hover:bg-base-200"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT */}
            <div className="navbar-end">
                <Link href="/login" className="btn btn-primary">
                    Login
                </Link>
            </div>

        </div>
    );
};

export default Navbar;