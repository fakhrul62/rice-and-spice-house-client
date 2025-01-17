import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t border-gray-200">
      <div className="w-10/12 mx-auto px-5 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="flex flex-col -space-y-5 justify-center">
              <span className="logo-1 text-2xl text-black relative z-20">
                Rice & Spice
              </span>
              <span className="logo-2 text-5xl text-amber-400 z-10`">
                House
              </span>{" "}
            </span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
          Where Flavors Meet Elegance
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
            About Us
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-600 hover:text-gray-800">Our Story</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800">Chef's Vision</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800">Sustainability</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800">Careers</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
            Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
              </li>
              <li>
                <Link to="/our-menu" className="text-gray-600 hover:text-gray-800">Menu</Link>
              </li>
              <li>
                <Link to="/order" className="text-gray-600 hover:text-gray-800">Order</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
            Explore
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-600 hover:text-gray-800">Private Dining</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800">Catering Services</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800">Gift Cards</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800">Loyalty Program</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
            Connect With Us

            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-600 hover:text-gray-800">Facebook</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800">Instagram</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800">Twitter</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800">YouTube</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="w-10/12 mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Rice & Spice House —
            <Link
              href="https://github.com/fakhrul62"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @fakhrul62
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
