import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col items-center justify-around p-3">
      <div className="w-full max-w-4xl"></div>

      {/* Description Section */}
      <div className="max-w-2xl text-center text-lg bg-gray-900 text-white p-4 rounded-lg shadow-lg mt-3 ">
        <span className="bg-[#A0153E] text-black font-bold px-2 py-1 rounded-md shadow-md hover:scale-105 hover:rotate-1 transition-all duration-200">
          KalkatiaLang
        </span>{" "}
        is a playful, simulation programming language inspired by the vibrant
        culture and humor of Kolkata. Built with TypeScript, it replaces
        traditional coding syntax with quirky Bengali-inspired keywords like{" "}
        <code className="bg-[#A0153E] px-1 rounded hover:bg-[#C8234E] hover:scale-105 transition-all duration-200">
          mama
        </code>{" "}
        for variables and{" "}
        <code className="bg-[#A0153E] px-1 rounded hover:bg-[#C8234E] hover:scale-105 transition-all duration-200">
          chakallas
        </code>{" "}
        for printing. Designed for fun, it&apos;s fully functional and
        translates to JavaScript, making coding both entertaining and practical.
        Dive into{" "}
        <span className="bg-[#A0153E] text-black font-bold px-2 py-1 rounded-md shadow-md hover:scale-105 hover:rotate-1 transition-all duration-200">
          KalkatiaLang
        </span>{" "}
        for a unique, laughter-filled coding experience! 🚀
      </div>

      <Link href="/byteyard">
        <button className="mb-20 bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 hover:scale-105 transition-all duration-200">
          🚀 Launch KalkatiaLang
        </button>
      </Link>
    </div>
  );
}
