import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col items-center justify-around p-3 mt-20  max-w-screen">
      <div className="w-full max-w-4xl flex items-center justify-between"></div>

      {/* Description Section */}

      <div className="max-w-2xl text-center text-lg bg-gray-900 text-white p-4 rounded-lg shadow-lg mt-3 flex justify-between items-center flex-col">
        <Image
          src="https://i.ibb.co/WpRJR7GQ/kalkatia-Lang-1.jpg"
          alt="Image"
          width={300}
          height={300}
          className="width-[90%] height-[80%]"
        ></Image>
        <div className="flex items-start flex-col justify-between">
          <h1 className="text-xl font-bold sm:text-lg">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-md shadow-md hover:scale-105 hover:rotate-1 transition-all duration-200">
              KalkatiaLang
            </span>{" "}
            is a playful, simulation programming language inspired by the
            vibrant culture and humor of Kolkata. Built with TypeScript, it
            replaces traditional coding syntax with quirky keywords like{" "}
            <span className="bg-[#219C90] text-black px-1 rounded hover:bg-[#C8234E] hover:scale-105 transition-all duration-200">
              mama
            </span>{" "}
            for variables and{" "}
            <span className="bg-[#219C90] text-black px-1 rounded hover:bg-[#C8234E] hover:scale-105 transition-all duration-200">
              chakallas
            </span>{" "}
            for printing. Designed for fun, it&apos;s fully functional and
            translates to JavaScript, making coding both entertaining and
            practical. Dive into{" "}
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-md shadow-md hover:scale-105 hover:rotate-1 transition-all duration-200">
              KalkatiaLang
            </span>{" "}
            for a unique, laughter-filled coding experience! 🚀
          </h1>
        </div>
      </div>

      <Link href="/byteyard">
        <button className=" bg-[#219C90] text-xl text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 hover:scale-105 transition-all duration-200">
          🚀 Launch KalkatiaLang
        </button>
      </Link>
      <Link href="/docs">
        <button className="mb-20 text-xl bg-[#219C90] text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 hover:scale-105 transition-all duration-200">
          🧾 Read Docs
        </button>
      </Link>
    </div>
  );
}
