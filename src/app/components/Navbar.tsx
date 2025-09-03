"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // remove "contact" from the hash links, we’ll handle it separately
  const links = ["about", "skills", "projects"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/90 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-teal-400">Ayomide Kofoworola</div>

        {/* Desktop Menu */}
        <ul className="md:flex space-x-8 hidden">
          {links.map((link) => (
            <li key={link}>
              <Link
                href={`#${link}`}
                className="hover:text-teal-400 transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
          {/* Separate Contact Page Link */}
          <li>
            <Link href="/contact" className="hover:text-teal-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gray-900 px-6 pb-4 space-y-4">
          {links.map((link) => (
            <li key={link}>
              <Link
                href={`#${link}`}
                className="block hover:text-teal-400 transition"
                onClick={() => setOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
          {/* Separate Contact Page Link */}
          <li>
            <Link
              href="/contact"
              className="block hover:text-teal-400 transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;