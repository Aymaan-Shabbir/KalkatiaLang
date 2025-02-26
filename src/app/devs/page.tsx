import Image from "next/image";
import Link from "next/link";

export default function Devs() {
  const dev = [
    {
      name: "Md Rashid Imran",
      image: "https://i.ibb.co/SXYRpxNq/Face.jpg",
      github: "https://github.com/Md-Rashid-Imran",
    },
    {
      name: "Aymaan Shabbir Ibrahim",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQF9UHsByncpQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729627703022?e=1746057600&v=beta&t=dYJ68OaHKR4t5iFWrFB-AVcxUMAM0GHkcimpL2o9S7s",
      github: "https://github.com/Aymaan-Shabbir",
    },
  ];

  return (
    <div className="flex h-screen max-w-screen items-center justify-around gap-4 flex-wrap mt-20">
      {dev.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-[#FA163F] text-white p-6 rounded-xl shadow-lg w-80"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            className="rounded-full border-2 border-white object-cover"
          />
          <h1 className="text-xl font-semibold mt-4">{item.name}</h1>
          <Link
            href={item.github}
            className="mt-2 text-gray-800 hover:text-blue-500 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </Link>
        </div>
      ))}
    </div>
  );
}
