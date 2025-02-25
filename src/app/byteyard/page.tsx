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
    <main className="w-full flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">
        Hello, {randomLocation}! 👋
      </h1>
      <IDE />
    </main>
  );
}
