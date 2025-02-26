import Link from "next/link";
import Image from "next/image";
import SPAN from "@/components/SPAN";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col items-center justify-around p-3 mt-20  max-w-screen">
      <div className="w-full max-w-4xl flex items-center justify-between"></div>

      {/* Description Section */}

      <div className="max-w-2xl text-center text-lg bg-[#0FABBC] text-white p-4 rounded-lg shadow-lg mt-3 flex justify-between items-center flex-col">
        <Image
          src="https://i.ibb.co/KpFRF3v7/kalkatia-Lang.png"
          alt="Image"
          width={300}
          height={300}
          className="width-[90%] height-[80%]"
        ></Image>
        <div className="flex items-start flex-col justify-between">
          <h1 className="text-xl font-bold sm:text-lg">
            <span></span>
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-md shadow-md hover:scale-105 hover:rotate-1 transition-all duration-200">
              KalkatiaLang
            </span>{" "}
            is a playful, simulation programming language written on TypeScript
            inspired by the vibrant culture and humor of Kolkata. It replaces
            traditional coding syntax with quirky keywords like{" "}
            <span className="bg-[#FA163F] text-black px-1 rounded hover:bg-[#C8234E] hover:scale-105 transition-all duration-200">
              mama
            </span>{" "}
            for variables and{" "}
            <span className="bg-[#FA163F] text-black px-1 rounded hover:bg-[#C8234E] hover:scale-105 transition-all duration-200">
              chakallas
            </span>{" "}
            for printing. Designed for fun, it&apos;s fully functional, making
            coding both entertaining and practical. Dive into{" "}
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-md shadow-md hover:scale-105 hover:rotate-1 transition-all duration-200">
              KalkatiaLang
            </span>{" "}
            for a unique, laughter-filled coding experience! 🚀
          </h1>
        </div>
      </div>

      <button className=" bg-[#FA163F] text-xl text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 hover:scale-105 transition-all duration-200 mt-4">
        <SPAN text="npm install -g kalkatia-lang" />
      </button>

      <Link href="/byteyard">
        <button className=" bg-[#FA163F] text-xl text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 hover:scale-105 transition-all duration-200 m-4">
          🚀 Launch KalkatiaLang
        </button>
      </Link>
      <Link href="/docs">
        <button className="mb-20 text-xl bg-[#FA163F] text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 hover:scale-105 transition-all duration-200">
          🧾 Read Docs
        </button>
      </Link>
    </div>
  );
}
