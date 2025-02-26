/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import IDE from "@/components/IDE";

export default function byteyard() {
  const locations = [
    "from Topsia",
    "from Park Circus",
    "from Khiderpore",
    "from Esplanade",
    "from New Alipore",
    "from Dum Dum",
    "from Howrah",
    "from Salt Lake",
    "from Shyambazar",
    "from Sealdah",
  ];

  const [randomLocation, setRandomLocation] = useState("");

  useEffect(() => {
    // Generate a random location when the component mounts
    const randomIndex = Math.floor(Math.random() * locations.length);
    setRandomLocation(locations[randomIndex]);
  }, []);

  return (
    <main className=" max-w-screen flex min-h-screen flex-col items-center justify-center p-5 mt-20">
      <h1 className="text-2xl font-bold mb-4 text-[#19134c] text-center">
        Hello, {randomLocation} .
      </h1>
      <IDE />
    </main>
  );
}
