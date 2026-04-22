import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

            <div className="text-center max-w-xl">

                {/* 404 TEXT */}
                <h1 className="text-7xl font-extrabold text-primary mb-4">
                    404
                </h1>

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Page Not Found
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-500 mb-8">
                    Sorry 😢 The page you are looking for doesn’t exist
                    or has been moved somewhere else.
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4 justify-center flex-wrap">

                    <Link
                        href="/"
                        className="btn btn-primary"
                    >
                        🏠 Go Home
                    </Link>

                    <Link
                        href="/dashboard"
                        className="btn btn-outline"
                    >
                        📚 Dashboard
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default NotFound;