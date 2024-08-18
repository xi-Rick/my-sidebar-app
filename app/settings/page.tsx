import {
    IconBell,
    IconLock,
    IconPalette,
    IconUser
} from "@tabler/icons-react";

export default function Settings() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-gray-100 rounded-3xl">
            <div className="w-full max-w-6xl">
                {/* Settings Header */}
                <section className="text-left mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-black">Settings</h1>
                    <p className="text-lg mb-8 text-black">Manage your account, preferences, and privacy settings here.</p>
                </section>

                {/* Settings Categories */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Account Settings */}
                    <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
                        <div className="mr-4">
                            <IconUser size={48} className="text-blue-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-black">Account Settings</h3>
                            <p className="text-gray-600 mb-4">
                                Update your personal information, change your password, and manage account details.
                            </p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-all">
                                Manage Account
                            </button>
                        </div>
                    </div>

                    {/* Privacy Settings */}
                    <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
                        <div className="mr-4">
                            <IconLock size={48} className="text-green-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-black">Privacy Settings</h3>
                            <p className="text-gray-600 mb-4">
                                Control who can see your profile and adjust your privacy preferences.
                            </p>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition-all">
                                Manage Privacy
                            </button>
                        </div>
                    </div>

                    {/* Notification Settings */}
                    <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
                        <div className="mr-4">
                            <IconBell size={48} className="text-yellow-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-black">Notification Settings</h3>
                            <p className="text-gray-600 mb-4">
                                Choose how and when you want to receive notifications from us.
                            </p>
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition-all">
                                Manage Notifications
                            </button>
                        </div>
                    </div>

                    {/* Theme Settings */}
                    <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
                        <div className="mr-4">
                            <IconPalette size={48} className="text-purple-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-black">Theme Settings</h3>
                            <p className="text-gray-600 mb-4">
                                Customize the appearance of the app with light or dark mode options.
                            </p>
                            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600 transition-all">
                                Customize Theme
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
