import Image from "next/image";
import Footer from "./components/Footer";
const features = [
  {
    icon: "24/7",
    title: "Available Anytime",
    desc: "Reliable limousine bookings for airport transfers, city rides, and VIP travel whenever you need them.",
  },
  {
    icon: "VIP",
    title: "Premium Comfort",
    desc: "Luxury vehicles with spacious interiors, smooth rides, and a polished travel experience across Qatar.",
  },
  {
    icon: "PRO",
    title: "Expert Chauffeurs",
    desc: "Professional drivers focused on punctuality, discretion, and excellent guest service.",
  },
  {
    icon: "QTR",
    title: "Qatar Specialists",
    desc: "Tailored routes for Doha city tours, hotel transfers, corporate travel, and special events.",
  },
];

const galleryItems = [
  {
    image: "/souq-waqif.jpg",
    title: "Souq Waqif",
    category: "Heritage Market",
    desc: "Traditional alleys, spices, handicrafts, local dining, and authentic Qatari culture in the heart of Doha.",
  },
  {
    image: "/katara-cultural-village.jpg",
    title: "Katara Cultural Village",
    category: "Culture & Arts",
    desc: "A waterfront destination for galleries, amphitheatre views, mosques, restaurants, and cultural events.",
  },
  {
    image: "/national-museum-qatar.jpg",
    title: "National Museum of Qatar",
    category: "Qatar Heritage",
    desc: "A desert-rose landmark telling Qatar's story through architecture, history, and immersive exhibitions.",
  },
  {
    image: "/museum-islamic-art.jpg",
    title: "Museum of Islamic Art",
    category: "Iconic Museum",
    desc: "One of Doha's signature cultural attractions with waterfront views and world-class Islamic art collections.",
  },
  {
    image: "/the-pearl-qatar.jpg",
    title: "The Pearl-Qatar",
    category: "Luxury Marina",
    desc: "Premium island living, marina walks, boutiques, cafes, and elegant photo stops for luxury city tours.",
  },
  {
    image: "/msheireb-downtown.jpg",
    title: "Msheireb Downtown",
    category: "Modern Doha",
    desc: "A walkable district blending smart city design, museums, cafes, heritage houses, and modern architecture.",
  },
  {
    image: "/qatar-desert.jpg",
    title: "Qatar Desert",
    category: "Desert Experience",
    desc: "Golden dunes, peaceful landscapes, sunset drives, and premium desert tour experiences outside the city.",
  },
  {
    image: "/lusail-qatar.jpg",
    title: "Lusail",
    category: "Main Attraction",
    desc: "A modern city destination known for skyline views, entertainment areas, waterfront drives, and night tours.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800  text-white">
      
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center">
        
        {/* Background Image */}
        <div className="w-full block object-cover absolute inset-0 ">
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
      <section id="fleet" className="min-h-screen py-20 px-6 bg-gray-900 text-white">
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
      <section id="services" className="py-20 bg-black text-white">
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
{/* WHY CHOOSE US */}
      <section id="gallery" className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">
            Why Choose Us
          </h2>

          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Experience unmatched luxury, comfort, and professionalism
            with Qatar’s premium limousine services.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-lg"
              >
                <div className="text-5xl mb-5">{item.icon}</div>

                <h3 className="text-2xl font-semibold text-yellow-500">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">
            Qatar Heritage & Attractions
          </h2>

          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Discover the heritage landmarks, cultural districts, desert routes,
            and modern city highlights that make Qatar a memorable luxury tour.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 text-left">

            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 shadow-xl hover:border-yellow-500 transition duration-300"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-yellow-500">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <p className="mt-8 text-xs text-zinc-500">
            Destination image credits: Wikimedia Commons.
          </p>
        </div>
      </section>
 

      {/* Contact Section */}
<section id="contact" className="min-h-screen py-20 px-6 bg-black text-white">
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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5  sm:gap-8">

      {/* Phone */}
      <div className="bg-zinc-900 p-8  rounded-3xl border border-zinc-800 hover:border-[#f5b042] transition duration-300 hover:scale-105">
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

        <p className="text-xs sm:text-sm md:text-base text-gray-400 break-words">
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
    <div className="text-center mt-8">
      <button className="bg-[#f5b042] text-black px-4 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300">
        Book Your Limousine
      </button>
    </div>
  </div>
</section>
      <Footer />
    </div>
  
    
  );
}
