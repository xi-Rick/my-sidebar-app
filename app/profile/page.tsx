export default function Profile() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-gray-100 rounded-3xl">
            <div className="w-full max-w-6xl relative">
                {/* Profile Header Section */}
                <section className="text-left mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-black">Your Profile</h1>
                    <p className="text-lg mb-8 text-black">
                        Welcome to your profile page! Here&apos;s a quick look at <br /> your information, hobbies, and more.
                    </p>

                    {/* Floating Avatar Image */}
                    <img
                        src="/images/me.png"
                        alt="Profile Avatar"
                        className="absolute top-0 right-0 w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg transform translate-x-12 -translate-y-12 pointer-events-none"
                    />
                </section>

                {/* Personal Information Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-black">Personal Information</h2>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <p className="text-xl mb-4 text-black">
                            <strong>Name:</strong> Dana Davis
                        </p>
                        <p className="text-xl mb-4 text-black">
                            <strong>Email:</strong> dana@danadavis.dev
                        </p>
                        <p className="text-xl text-black">
                            <strong>Location:</strong> USA
                        </p>
                    </div>
                </section>

                {/* Hobbies Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-black">Hobbies & Interests</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold mb-2 text-black">Photography</h3>
                            <p className="text-gray-600">Capturing moments and telling stories through the lens.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold mb-2 text-black">Traveling</h3>
                            <p className="text-gray-600">Exploring new cultures and destinations around the world.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold mb-2 text-black">Coding</h3>
                            <p className="text-gray-600">Building applications and solving problems with code.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold mb-2 text-black">Reading</h3>
                            <p className="text-gray-600">Diving into books and expanding knowledge across various genres.</p>
                        </div>
                    </div>
                </section>

                {/* Call-to-Action Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-semibold mb-8 text-black">Keep Your Profile Updated</h2>
                    <p className="text-lg mb-8 text-black">
                        Make sure your information is always up-to-date to get the most out of our platform.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
                        Edit Profile
                    </button>
                </section>
            </div>
        </main>
    );
}
