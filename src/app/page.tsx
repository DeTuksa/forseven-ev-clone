import Head from "next/head";
import Image from "next/image";
import CraftingForever from "./components/craftingForever";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white font-luxury overflow-hidden">
      <Head>
        <title>Forseven - Crafted Luxury</title>
        <meta name="description" content="Forseven - We craft unforgettable cars" />
      </Head>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <button className="flex items-center justify-between px-8 py-3 bg-white/20 backdrop-blur-md text-white text-lg rounded-full w-100 shadow-lg">
          <span className="text-xl mr-4 text-black">☰</span>
          <span className="tracking-[0.4em] mx-4 text-black">FORSEVEN</span>
          <span className="text-sm text-black ml-4">Stories</span>
        </button>
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-4xl font-semibold tracking-wide">
            WE CRAFT UNFORGETTABLE CARS
          </h1>
        </div>
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/2.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-4xl font-semibold tracking-wide">
            BLENDING BRITISH LUXURY
          </h1>
        </div>
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/3.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-4xl font-semibold tracking-wide">
            WITH VISIONARY TECHNOLOGIES, FOREVER
          </h1>
        </div>
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-white to-gray-100">
        <Image 
          src="/images/forseven-bg.webp" 
          alt="Luxury Car" 
          layout="fill" 
          objectFit="cover"
        />
      </div>


      <CraftingForever />
    </div>
  );
}
