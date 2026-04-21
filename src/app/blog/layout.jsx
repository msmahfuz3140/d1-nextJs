import Link from "next/link";

const blogs = [
    { id: 1, title: "Getting Started with React" },
    { id: 2, title: "Understanding Next.js App Router" },
    { id: 3, title: "Tailwind CSS Best Practices" },
    { id: 4, title: "Beginner Guide to MERN Stack" },
    { id: 5, title: "JavaScript ES6 Features" },
    { id: 6, title: "React Hooks Explained" },
    { id: 7, title: "Responsive Web Design" },
    { id: 8, title: "Git & GitHub for Beginners" },
    { id: 9, title: "API Integration in React" },
    { id: 10, title: "Authentication with Firebase" },
    { id: 11, title: "Next.js Server Components" },
    { id: 12, title: "MongoDB Database Basics" },
    { id: 13, title: "Node.js REST API" },
    { id: 14, title: "Express.js Middleware" },
    { id: 15, title: "Frontend Performance Optimization" },
    { id: 16, title: "Dark Mode Implementation" },
    { id: 17, title: "React Form Handling" },
    { id: 18, title: "Deploying Apps on Vercel" },
    { id: 19, title: "JWT Authentication Guide" },
    { id: 20, title: "Becoming a Full Stack Developer" },
];

const BlogLayout = ({ children }) => {
    return (
        <div className="drawer lg:drawer-open">

            <div className="drawer-content p-6">
                {children}
            </div>

            <div className="drawer-side">
                <ul className="menu bg-base-200 w-80 min-h-full p-4">
                    <h2 className="text-xl font-bold mb-4">Blogs</h2>

                    {blogs.map((blog) => (
                        <li key={blog.id}>
                            <Link href={`/blog/${blog.id}`}>
                                {blog.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default BlogLayout;