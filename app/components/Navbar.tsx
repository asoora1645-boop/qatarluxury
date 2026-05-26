import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-2.5 z-50 w-full border-b border-zinc-800 bg-black/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-xl font-bold text-yellow-500 md:text-2xl">
          Luxury Tours Qatar
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-zinc-200 md:flex">
          <Link href="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link href="/#fleet" className="hover:text-yellow-500">
            Fleet
          </Link>
          <Link href="/#services" className="hover:text-yellow-500">
            Services
          </Link>
          <Link href="/#gallery" className="hover:text-yellow-500">
            Gallery
          </Link>
          <Link href="/#contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </div>

        <Link
          href="/booking"
          className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}
