import { useState, useEffect } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import { Property } from "@/interfaces";
import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     try {
  //       const response = await axios.get("/api/properties");
  //       setProperties(response.data);
  //     } catch (error) {
  //       console.error("Error fetching properties:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProperties();
  // }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className=" lg:px-[60px] px-4 py-10 w-full " >
      <div
        className=" w-full h-[480px] bg-cover bg-center bg-[url('/assets/heroBG.svg')] sm:bg-[url('/assets/heroBG.svg')] rounded-3xl"
      >
        <div className="flex flex-col items-center justify-center text-white text-center h-full">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2 text-lg opacity-90">Discover amazing destinations</p>
        </div>
      </div>

      {/* <div className=" relative rounded-3xl w-full overflow-hidden ">
        <Image
          src={'/assets/heroBG.svg'}
          alt="Hero Background"
          width={1920}
          height={600}
          className="object-contain w-full h-full top-0"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center lg:max-w-3xl md:max-w-2xl  mx-auto text-white text-center">
          <h1 className="lg:text-7xl text-2xl md:text-4xl font-bold ">Find your favorite place here!</h1>
          <p className="mt-2 text-lg opacity-90">The best prices for over 2 million properties worldwide</p>
        </div>
      </div> */}

      <div className="grid grid-cols-3 gap-4">
        {properties.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}