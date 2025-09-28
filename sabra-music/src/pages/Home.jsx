function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome to Sabra Music
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your music streaming platform is ready! Tailwind CSS is working perfectly.
        </p>
        <div className="space-y-3">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
            Get Started
          </button>
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;