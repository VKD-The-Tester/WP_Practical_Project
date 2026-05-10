"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center ">
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Event Manager
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/events"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Search
            </Link>
            <Link
              href="/events/post"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Create
            </Link>
            <Link
              href="/auth/login"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
