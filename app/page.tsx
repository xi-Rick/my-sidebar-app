export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 bg-gray-100 rounded-3xl">
      <div className="w-full max-w-6xl rounded-bl-sm">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-black">My Sidebar App Demo</h1>
          <p className="text-lg mb-8 text-black">Explore new possibilities with ease and style. Customize your experience.</p>
          <img
            src="/images/webteam.png"
            alt="Hero Image"
            className="rounded-lg shadow-lg w-full mb-8 pointer-events-none"
          />
        </section>

        {/* Featured Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-black">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="/images/master.png"
                alt="Featured Image 1"
                className="rounded-lg mb-4 pointer-events-none"
              />
              <h3 className="text-xl font-bold mb-2 text-black">In-Depth Guide: How to Master Your Sidebar</h3>
              <p className="text-gray-600">Learn the secrets to making your sidebar work for you with our comprehensive guide.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              < img
                src="/images/sidebar.png"
                alt="Featured Image 2"
                className="rounded-lg mb-4 pointer-events-none"
              />
              <h3 className="text-xl font-bold mb-2 text-black">Top 5 Sidebar Designs to Inspire You</h3>
              <p className="text-gray-600">Get inspired by these stunning sidebar designs and take your app to the next level.</p>
            </div>
          </div>
        </section>

        {/* Inspirational Quote Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-black">A Little Inspiration</h2>
          <blockquote className="text-xl italic font-medium text-black">
            &quot;Design is not just what it looks like and feels like. Design is how it works.&quot; <br />
            <span className="font-bold">– Steve Jobs</span>
          </blockquote>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-black">Get Started Today</h2>
          <p className="text-lg mb-8 text-black">Ready to dive in? Create your first post, customize your app, and make it your own!</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
            Create Your First Post
          </button>
        </section>
      </div>
    </main>
  );
}
