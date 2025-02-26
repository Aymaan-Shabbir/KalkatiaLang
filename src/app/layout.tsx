import Navbar from "@/components/Navbar";
import "../app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Kalkatia.ts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#E9B824] text-white min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
