

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-xl font-bold text-gray-800">
          MyPortfolio
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Skills
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Projects
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Certifications
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </div>
      </div>

      <div className="md:hidden">
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
