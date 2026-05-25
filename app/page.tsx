import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
           src="/imagehome.jpg"
           alt="Luxury Tours"
            layout="fill"
        />
        </div>
        
        
      </section>
      {/* Content */}
<div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-[#2a1b00] px-6 py-16 border-t border-zinc-400 flex flex-col items-center justify-center text-center">

  <h1 className="text-sm md:text-2xl lg:text-3xl font-semibold text-[#f5b042] uppercase tracking-wide">
    Qatar Luxury Tours
  </h1>

  <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
    Premium limousine services for luxury city tours,
    airport transfers, desert experiences, and VIP travel
    across Qatar.
  </p>

  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
    <button className="rounded-full bg-white px-8 py-3 text-black font-semibold hover:scale-105 transition">
      Book Now
    </button>

    <button className="rounded-full border border-white px-8 py-3 hover:bg-white hover:text-black transition">
      Explore Tours
    </button>
  </div>
</div>
        
      {/* About Section */}
      <section className="min-h-screen py-20 px-6 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold">
        About Us
      </h2>

      <p className="mt-4 text-sm md:text-lg text-gray-300 max-w-3xl mx-auto">
        We provide premium limousine and luxury tour services
        across Qatar with world-class vehicles, professional
        chauffeurs, airport transfers, city tours, VIP transport,
        and personalized travel experiences.
      </p>
    </div>

    {/* Luxury Cars */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Vellfire */}
      <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
        <img
          src="/welfare.png"
          alt="Toyota Vellfire"
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <h3 className="text-2xl font-semibold">
            Toyota Vellfire
          </h3>
          <p className="text-gray-300 mt-2 text-sm">
            Spacious luxury MPV perfect for family trips,
            airport transfers, and VIP travel.
          </p>
        </div>
      </div>

      {/* Lexus */}
      <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
        <img
          src="/lexus.png"
          alt="Lexus"
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <h3 className="text-2xl font-semibold">
            Lexus
          </h3>
          <p className="text-gray-300 mt-2 text-sm">
            Elegant premium sedan designed for executive
            travel and luxury comfort.
          </p>
        </div>
      </div>

      {/* Mercedes */}
      <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
        <img
          src="/v-class.jpg"
          alt="Mercedes"
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <h3 className="text-2xl font-semibold">
            Mercedes Benz
          </h3>
          <p className="text-gray-300 mt-2 text-sm">
            Premium luxury transportation with unmatched
            style, comfort, and class.
          </p>
        </div>
      </div>

      {/* GMC */}
      <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
        <img
          src="/gmc.png"
          alt="GMC Yukon"
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <h3 className="text-2xl font-semibold">
            GMC Yukon
          </h3>
          <p className="text-gray-300 mt-2 text-sm">
            Luxury SUV for group travel, desert tours,
            and premium city rides.
          </p>
        </div>
      </div>

    </div>

    {/* Extra Content */}
    <div className="mt-16 text-center">
      <h3 className="text-3xl font-bold mb-4">
        Experience Qatar in Luxury
      </h3>

      <p className="text-gray-300 max-w-4xl mx-auto text-sm md:text-lg">
        From airport pickups to luxury city tours, corporate
        travel, weddings, and VIP transportation, we deliver
        an unforgettable limousine experience in Qatar.
        Travel with comfort, elegance, and professionalism.
      </p>
    </div>

  </div>
</section>
      <section className="py-20 bg-black text-white">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Heading */}
    <div className="text-center mb-14">
      <p className="text-yellow-500 uppercase tracking-widest text-sm">
        Premium Services
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        Our Luxury Chauffeur Services
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
        Experience Qatar in unmatched comfort with our premium limousine
        and chauffeur-driven luxury vehicles.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Service Card */}
      <div className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition duration-300 border border-zinc-800 hover:border-yellow-500 shadow-xl">
        <div className="text-5xl mb-5">🚘</div>
        <h3 className="text-2xl font-semibold mb-3">
          Airport Transfers
        </h3>
        <p className="text-gray-400">
          Premium pickup and drop services from Hamad International Airport
          with professional chauffeurs.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition duration-300 border border-zinc-800 hover:border-yellow-500 shadow-xl">
        <div className="text-5xl mb-5">🏨</div>
        <h3 className="text-2xl font-semibold mb-3">
          Hotel Transfers
        </h3>
        <p className="text-gray-400">
          Comfortable transportation between luxury hotels and destinations
          across Qatar.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition duration-300 border border-zinc-800 hover:border-yellow-500 shadow-xl">
        <div className="text-5xl mb-5">💼</div>
        <h3 className="text-2xl font-semibold mb-3">
          Corporate Travel
        </h3>
        <p className="text-gray-400">
          Executive transportation for business meetings, VIP guests,
          and corporate events.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition duration-300 border border-zinc-800 hover:border-yellow-500 shadow-xl">
        <div className="text-5xl mb-5">🎉</div>
        <h3 className="text-2xl font-semibold mb-3">
          Event Transportation
        </h3>
        <p className="text-gray-400">
          Arrive in style for weddings, private parties,
          luxury events, and celebrations.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition duration-300 border border-zinc-800 hover:border-yellow-500 shadow-xl">
        <div className="text-5xl mb-5">🏜️</div>
        <h3 className="text-2xl font-semibold mb-3">
          Qatar City Tours
        </h3>
        <p className="text-gray-400">
          Explore Doha, Katara, Souq Waqif, Pearl Qatar,
          and iconic destinations in luxury.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition duration-300 border border-zinc-800 hover:border-yellow-500 shadow-xl">
        <div className="text-5xl mb-5">⭐</div>
        <h3 className="text-2xl font-semibold mb-3">
          VIP Chauffeur Service
        </h3>
        <p className="text-gray-400">
          Luxury chauffeur-driven Lexus, Mercedes, GMC, and premium vehicles
          for elite travel experiences.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Contact Section */}
<section className="min-h-screen py-20 px-6 bg-black text-white">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <p className="text-[#f5b042] uppercase tracking-widest text-sm">
        Contact Us
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        Book Your Luxury Ride Today
      </h2>

      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Experience Qatar in unmatched luxury. Contact us for limousine
        booking, airport transfers, VIP chauffeur services, and city tours.
      </p>
    </div>

    {/* Contact Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Phone */}
      <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-[#f5b042] transition duration-300 hover:scale-105">
        <div className="text-5xl mb-5">📞</div>

        <h3 className="text-2xl font-semibold mb-3 text-[#f5b042]">
          Call Us
        </h3>

        <p className="text-gray-400">
          +974 1234 5678
        </p>
      </div>

      {/* Email */}
      <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-[#f5b042] transition duration-300 hover:scale-105">
        <div className="text-5xl mb-5">✉️</div>

        <h3 className="text-2xl font-semibold mb-3 text-[#f5b042]">
          Email Us
        </h3>

        <p className="text-gray-400">
          info@luxurytoursqatar.com
        </p>
      </div>

      {/* Location */}
      <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-[#f5b042] transition duration-300 hover:scale-105">
        <div className="text-5xl mb-5">📍</div>

        <h3 className="text-2xl font-semibold mb-3 text-[#f5b042]">
          Location
        </h3>

        <p className="text-gray-400">
          Doha, Qatar
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <div className="text-center mt-14">
      <button className="bg-[#f5b042] text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300">
        Book Your Limousine
      </button>
    </div>
  </div>
</section>
      <Footer />
    </div>
  
    
  );
}
