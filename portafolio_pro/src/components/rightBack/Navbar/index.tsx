/*************  ✨ Windsurf Command ⭐  *************/
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4  text-white">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      

      <ul className="flex space-x-8 items-center font-medium">
        <li>
          <a href="#" className="px-4 py-2 rounded-full border border-white text-white font-semibold">
            Home
          </a>
        </li>
        <li><a href="#" className="text-gray-400 hover:text-white">Portfolio</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">About Me</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Resume</a></li>
        <li><a href="#" className="text-gray-500 hover:text-white">Contact</a></li>
        <li>

          <button className="text-white hover:text-yellow-400 transition">
            🌞
          </button>
        </li>
      </ul>
  

      <button className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-black font-semibold flex items-center gap-2 shadow-md hover:brightness-110">
        Let's Talk
        <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M17 8h2a2 2 0 0 1 2 2v10l-4-4H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8" />
        </svg>
      </button>
  
    </div>
  </nav>
    );
  }  

