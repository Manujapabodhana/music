import EventCard from "../components/EventCard";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-start text-left px-16 relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold leading-snug max-w-2xl">
            Elevate Your Musical Journey
          </h1>
          <p className="text-2xl mt-4">Feel The Rhythm Of Your Soul!</p>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold text-xl">
            Sign Up
          </button>
          <div className="flex gap-4 mt-8">
            <a href="#" className="text-2xl">🐦</a>
            <a href="#" className="text-2xl">📷</a>
            <a href="#" className="text-2xl">📘</a>
            <a href="#" className="text-2xl">🔗</a>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-200 py-16 px-10">
        <h2 className="text-3xl text-black font-bold mb-8">Upcoming Events</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          <EventCard 
            image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center" 
            title="Ridmaya - 2026" 
            faculty="Faculty of Management Studies" 
          />
          <EventCard 
            image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop&crop=center" 
            title="Raathriya Wee - 2026" 
            faculty="Faculty of Applied Science" 
          />
          <EventCard 
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center" 
            title="Musical Fest - 2026" 
            faculty="Faculty of Computing" 
          />
        </div>
      </section>

      {/* About Us */}
      <section className="bg-white py-20 px-16 text-center text-black">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Seamless booking and planning for your musical events at your fingertips —
          effortless, affordable, and stress‑free journeys await you!
        </p>
      </section>
    </div>
  );
}

export default Home;