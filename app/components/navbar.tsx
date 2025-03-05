import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="w-full px-8 text-gray-300 bg-gray-900 shadow-sm">
      <div className="container flex flex-col md:flex-row item-center justify-between py-5 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <NavLink to="/" className="flex items-center mb-5 md:mb-0">
            <span>
              REST<span className="text-blue-500">Explorer</span>
            </span>
          </NavLink>
          <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8">
            <NavLink
              to="/"
              end
              className="mr-5 font-medium text-gray-400 hover:text-gray-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/countries"
              end
              className="mr-5 font-medium text-gray-400 hover:text-gray-200"
            >
              Countries
            </NavLink>
            <NavLink
              to="/about"
              end
              className="mr-5 font-medium text-gray-400 hover:text-gray-200"
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
