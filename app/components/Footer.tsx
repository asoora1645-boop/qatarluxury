import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2  gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-[#f5b042]">
              Luxury Tours Qatar
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Premium limousine, chauffeur, airport transfer, and private tour
              services across Qatar with luxury vehicles and professional
              drivers.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#f5b042]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="transition hover:text-[#f5b042]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-[#f5b042]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition hover:text-[#f5b042]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-[#f5b042]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#f5b042]">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Airport Transfers</li>
              <li>VIP Chauffeur Service</li>
              <li>Hotel Transfers</li>
              <li>Corporate Travel</li>
              <li>Qatar City Tours</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#f5b042]">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Doha, Qatar</p>
              <p>+974 1234 5678</p>
              <p>info@luxurytoursqatar.com</p>
            </div>
            

            <div className="mt-5 flex   flex  flex-wrap gap-x-4 gap-y-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
              <a href="#" className="transition hover:text-[#f5b042]">
                Facebook
              </a>
              <a href="#" className="transition hover:text-[#f5b042]">
                Instagram
              </a>
              <a href="#" className="transition hover:text-[#f5b042]">
                X
              </a>
              <a href="#" className="transition hover:text-[#f5b042]">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-sm text-gray-500">
          &copy; 2026 Luxury Tours Qatar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
