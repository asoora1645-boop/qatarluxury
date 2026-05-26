export default function BookingPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-lg">
        
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-4">
          Book Your Luxury Ride
        </h1>

        <p className="text-center text-zinc-400 mb-10">
          Reserve your premium limousine experience in Qatar
        </p>

        <form className="grid md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-zinc-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-zinc-300">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+974 XXXXXXXX"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Pickup Location */}
          <div>
            <label className="block mb-2 text-zinc-300">
              Pickup Location
            </label>
            <input
              type="text"
              placeholder="Airport / Hotel / Location"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Destination */}
          <div>
            <label className="block mb-2 text-zinc-300">
              Destination
            </label>
            <input
              type="text"
              placeholder="Destination"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-2 text-zinc-300">
              Date
            </label>
            <input
              type="date"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block mb-2 text-zinc-300">
              Time
            </label>
            <input
              type="time"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Vehicle */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-zinc-300">
              Select Vehicle
            </label>

            <select className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option>Lexus ES</option>
              <option>Mercedes V-Class</option>
              <option>GMC Yukon</option>
              <option>Toyota Welfare</option>
            </select>
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-zinc-300">
              Additional Notes
            </label>

            <textarea
              rows={4}
              placeholder="Any special request..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2 text-center">
            <button className="bg-yellow-500 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
