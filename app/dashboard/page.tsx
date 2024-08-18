export default function Dashboard() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 rounded-3xl">
            <div className="w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-black">Dashboard</h1>

                {/* Statistics Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-black">Statistics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-black">Total Users</h3>
                            <p className="text-4xl font-bold text-blue-500 mt-2">1,024</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-black">Active Sessions</h3>
                            <p className="text-4xl font-bold text-green-500 mt-2">64</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-black">New Signups</h3>
                            <p className="text-4xl font-bold text-purple-500 mt-2">87</p>
                        </div>
                    </div>
                </section>

                {/* Recent Activity Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-black">Recent Activity</h2>
                    <div className="bg-white rounded-lg shadow-md p-6 text-black">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>John Doe signed up for the newsletter.</li>
                            <li>Jane Smith posted a new comment.</li>
                            <li>Michael Johnson liked your post.</li>
                        </ul>
                    </div>
                </section>

                {/* Notifications Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-black">Notifications</h2>
                    <div className="bg-white rounded-lg shadow-md p-6 text-black">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>System update scheduled for tomorrow at 2:00 AM.</li>
                            <li>New feature release: Dark mode toggle is now available!</li>
                            <li>Don&apos;t forget to check out the latest blog post.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}
