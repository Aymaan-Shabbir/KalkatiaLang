"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#FF204E] px-6 py-4 flex items-center justify-between relative">
      
      <h1 className="font-bold text-3xl text-white">KalkatiaLang</h1>

      
      <button
        className="md:hidden text-white bg-transparent outline-none focus:ring-0 mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        <li className="hover:bg-[#A0153E] hover:rounded-lg px-4 py-2 cursor-pointer">
          <Link href="/docs">
            <h1 className="text-xl font-bold text-white">Docs.</h1>
          </Link>
        </li>
        <li className="hover:bg-[#A0153E] hover:rounded-lg px-4 py-2 cursor-pointer">
          <Link href="/byteyard">
            <h1 className="text-xl font-bold text-white">Byteyard</h1>
          </Link>
        </li>
        <li className="hover:bg-[#A0153E] hover:rounded-lg px-4 py-2 cursor-pointer">
          <Link href="/devs">
            <h1 className="text-xl font-bold text-white">Devs.</h1>
          </Link>
        </li>
      </ul>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-[#FF204E] shadow-md md:hidden transition-all duration-300 ease-in-out">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="hover:bg-[#A0153E] hover:rounded-lg px-6 py-3 cursor-pointer text-white text-xl font-bold w-full text-center">
              Docs.
            </li>
            <li className="hover:bg-[#A0153E] hover:rounded-lg px-6 py-3 cursor-pointer text-white text-xl font-bold w-full text-center">
              Byteyard
            </li>
            <li className="hover:bg-[#A0153E] hover:rounded-lg px-6 py-3 cursor-pointer text-white text-xl font-bold w-full text-center">
              Devs.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
