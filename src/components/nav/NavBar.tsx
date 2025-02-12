'use client';

import { useState } from 'react';

import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          AppLogo
        </Link>

        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <Link href="/" className="text-white hover:text-gray-200">
            Blog
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            FAQs
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link href="/" className="text-white text-lg font-bold">
            Download App
          </Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          title="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block text-white hover:text-gray-200">
            Blog
          </Link>
          <Link href="/about" className="block text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/contact" className="block text-white hover:text-gray-200">
            FAQs
          </Link>
          <Link href="/contact" className="block text-white hover:text-gray-200">
            Contact
          </Link>
          <Link href="/" className="block text-white hover:text-gray-200">
            Download App
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;