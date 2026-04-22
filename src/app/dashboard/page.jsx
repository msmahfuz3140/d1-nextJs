import React from 'react';

export const metadata = {
    title: "Dashboard",
    description: "Learn more about our company and mission."
};

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Md Asif Choudhury",
    category: "Web Development",
    date: "2026-04-01",
    image: "https://picsum.photos/id/1015/600/400",
    description: "Learn React basics including components, props, and state.",
    tags: ["React", "Frontend"],
  },
  {
    id: 2,
    title: "Understanding Next.js App Router",
    author: "Md Asif Choudhury",
    category: "Next.js",
    date: "2026-04-02",
    image: "https://picsum.photos/id/1016/600/400",
    description: "Explore file-based routing and layouts in Next.js.",
    tags: ["Next.js", "SSR"],
  },
  {
    id: 3,
    title: "Tailwind CSS Best Practices",
    author: "Md Asif Choudhury",
    category: "CSS",
    date: "2026-04-03",
    image: "https://picsum.photos/id/1018/600/400",
    description: "Write clean UI faster using Tailwind CSS utilities.",
    tags: ["Tailwind", "UI"],
  },
  {
    id: 4,
    title: "Beginner Guide to MERN Stack",
    author: "Md Asif Choudhury",
    category: "MERN",
    date: "2026-04-04",
    image: "https://picsum.photos/id/1020/600/400",
    description: "Build fullstack apps using MongoDB, Express, React, Node.",
    tags: ["MERN", "Fullstack"],
  },
  {
    id: 5,
    title: "JavaScript ES6 Features",
    author: "Md Asif Choudhury",
    category: "JavaScript",
    date: "2026-04-05",
    image: "https://picsum.photos/id/1024/600/400",
    description: "Understand modern JavaScript features like arrow functions.",
    tags: ["JavaScript", "ES6"],
  },
  {
    id: 6,
    title: "React Hooks Explained",
    author: "Md Asif Choudhury",
    category: "React",
    date: "2026-04-06",
    image: "https://picsum.photos/id/1025/600/400",
    description: "Learn useState, useEffect, and custom hooks easily.",
    tags: ["Hooks", "React"],
  },
  {
    id: 7,
    title: "Responsive Web Design",
    author: "Md Asif Choudhury",
    category: "Design",
    date: "2026-04-07",
    image: "https://picsum.photos/id/1031/600/400",
    description: "Make websites responsive for mobile and desktop.",
    tags: ["Responsive", "CSS"],
  },
  {
    id: 8,
    title: "Git & GitHub for Beginners",
    author: "Md Asif Choudhury",
    category: "Tools",
    date: "2026-04-08",
    image: "https://picsum.photos/id/1033/600/400",
    description: "Version control basics using Git and GitHub.",
    tags: ["Git", "GitHub"],
  },
  {
    id: 9,
    title: "API Integration in React",
    author: "Md Asif Choudhury",
    category: "React",
    date: "2026-04-09",
    image: "https://picsum.photos/id/1035/600/400",
    description: "Fetch and display API data in React apps.",
    tags: ["API", "Fetch"],
  },
  {
    id: 10,
    title: "Authentication with Firebase",
    author: "Md Asif Choudhury",
    category: "Backend",
    date: "2026-04-10",
    image: "https://picsum.photos/id/1037/600/400",
    description: "Implement login and signup using Firebase Auth.",
    tags: ["Firebase", "Auth"],
  },
  {
    id: 11,
    title: "Next.js Server Components",
    author: "Md Asif Choudhury",
    category: "Next.js",
    date: "2026-04-11",
    image: "https://picsum.photos/id/1040/600/400",
    description: "Understand server components and rendering.",
    tags: ["Next.js", "Server"],
  },
  {
    id: 12,
    title: "MongoDB Database Basics",
    author: "Md Asif Choudhury",
    category: "Database",
    date: "2026-04-12",
    image: "https://picsum.photos/id/1041/600/400",
    description: "Learn CRUD operations with MongoDB.",
    tags: ["MongoDB", "Database"],
  },
  {
    id: 13,
    title: "Node.js REST API",
    author: "Md Asif Choudhury",
    category: "Backend",
    date: "2026-04-13",
    image: "https://picsum.photos/id/1042/600/400",
    description: "Create RESTful APIs using Node.js and Express.",
    tags: ["Node.js", "API"],
  },
  {
    id: 14,
    title: "Express.js Middleware",
    author: "Md Asif Choudhury",
    category: "Backend",
    date: "2026-04-14",
    image: "https://picsum.photos/id/1043/600/400",
    description: "Learn middleware concepts in Express.",
    tags: ["Express", "Middleware"],
  },
  {
    id: 15,
    title: "Frontend Performance Optimization",
    author: "Md Asif Choudhury",
    category: "Performance",
    date: "2026-04-15",
    image: "https://picsum.photos/id/1044/600/400",
    description: "Optimize frontend apps for better performance.",
    tags: ["Performance", "Optimization"],
  },
  {
    id: 16,
    title: "Dark Mode Implementation",
    author: "Md Asif Choudhury",
    category: "UI",
    date: "2026-04-16",
    image: "https://picsum.photos/id/1045/600/400",
    description: "Add dark mode support using Tailwind CSS.",
    tags: ["Dark Mode", "UI"],
  },
  {
    id: 17,
    title: "React Form Handling",
    author: "Md Asif Choudhury",
    category: "React",
    date: "2026-04-17",
    image: "https://picsum.photos/id/1047/600/400",
    description: "Handle forms efficiently in React.",
    tags: ["Forms", "React"],
  },
  {
    id: 18,
    title: "Deploying Apps on Vercel",
    author: "Md Asif Choudhury",
    category: "Deployment",
    date: "2026-04-18",
    image: "https://picsum.photos/id/1050/600/400",
    description: "Deploy your Next.js project easily on Vercel.",
    tags: ["Vercel", "Deploy"],
  },
  {
    id: 19,
    title: "JWT Authentication Guide",
    author: "Md Asif Choudhury",
    category: "Security",
    date: "2026-04-19",
    image: "https://picsum.photos/id/1052/600/400",
    description: "Secure APIs using JWT authentication.",
    tags: ["JWT", "Security"],
  },
  {
    id: 20,
    title: "Becoming a Full Stack Developer",
    author: "Md Asif Choudhury",
    category: "Career",
    date: "2026-04-20",
    image: "https://picsum.photos/id/1053/600/400",
    description: "Roadmap to become a professional full stack developer.",
    tags: ["Career", "Fullstack"],
  },
];


const DetailsPage = ({ params }) => {

  // ✅ NO await needed
  const { blogId } = params;

  const blog = blogs.find(
    (blog) => blog.id === Number(blogId)
  );

  // ✅ Not Found
  if (!blog) {
    return (
      <h2 className="text-center text-2xl mt-10">
        Blog Not Found
      </h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* IMAGE */}
     

      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-2">
        {blog.title}
      </h2>

      {/* META */}
      <p className="text-gray-500 mb-2">
        By {blog.author} • {blog.date}
      </p>

      <h3 className="text-lg font-semibold mb-3">
        Category: {blog.category}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-700 mb-4">
        {blog.description}
      </p>

      {/* TAGS */}
      <div className="flex gap-2 flex-wrap">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="badge badge-outline"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
};

export default DetailsPage;