import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
            <p className="text-sm leading-relaxed mb-6">
              Stay connected, explore opportunities, and invest with confidence.
              Your real estate success starts here
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                Services
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                Invest
              </Link>
              <Link
                href="/properties"
                className="hover:text-green-400 transition-colors"
              >
                Properties
              </Link>
            </nav>
          </div>

          {/* Right Column */}
          <div>
            <nav className="flex flex-col space-y-3">
              <Link href="#" className="hover:text-green-400 transition-colors">
                About
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                Contact
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright and Logo Watermark */}
      <div className="container mx-auto px-4 pb-6 relative z-10">
        <div className="text-center text-sm text-gray-400">
          All Rights Reserved 2025 | Landvalue
        </div>
      </div>

      {/* Large Watermark Logo */}
      <div className="absolute bottom-0 left-60 opacity-10 z-0">
        <div className="text-[12rem] font-bold italic transform translate-y-1/4">
          Landvalue
        </div>
      </div>
    </footer>
  );
}
