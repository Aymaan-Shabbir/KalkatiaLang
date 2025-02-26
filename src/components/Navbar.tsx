"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#FA163F] px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logo */}
      <Link href="/">
        <Image
          src="https://i.ibb.co/ymr4kJqP/kpl2.png"
          alt="KalkatiaLang"
          width={50}
          height={50}
        ></Image>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white bg-transparent outline-none focus:ring-0 mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        <li className="hover:bg-[#EE9322] hover:rounded-lg px-4 py-2 cursor-pointer">
          <Link href="/docs">
            <h1 className="text-xl font-bold text-[#EBE76C] ">Docs.</h1>
          </Link>
        </li>
        <li className="hover:bg-[#EE9322] hover:rounded-lg px-4 py-2 cursor-pointer">
          <Link href="/byteyard">
            <h1 className="text-xl font-bold text-[#EBE76C]  ">Byteyard</h1>
          </Link>
        </li>
        <li className="hover:bg-[#EE9322] hover:rounded-lg px-4 py-2 cursor-pointer">
          <Link href="/devs">
            <h1 className="text-xl font-bold text-[#EBE76C]  ">Devs.</h1>
          </Link>
        </li>
      </ul>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FA163F] shadow-md md:hidden transition-all duration-300 ease-in-out z-40">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li
              className="hover:bg-[#EE9322] hover:rounded-lg px-6 py-3 cursor-pointer w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              <Link
                href="/docs"
                className="text-[#EBE76C] text-xl font-bold block w-full py-2"
              >
                Docs.
              </Link>
            </li>
            <li
              className="hover:bg-[#EE9322] hover:rounded-lg px-6 py-3 cursor-pointer w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              <Link
                href="/byteyard"
                className="text-[#EBE76C] text-xl font-bold block w-full py-2"
              >
                Byteyard
              </Link>
            </li>
            <li
              className="hover:bg-[#EE9322] hover:rounded-lg px-6 py-3 cursor-pointer w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              <Link
                href="/devs"
                className="text-[#EBE76C] text-xl font-bold block w-full py-2"
              >
                Devs.
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
