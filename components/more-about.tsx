'use client'
import React from 'react';
import Image from 'next/image';
import Button from "@/components/ui/button";
import aboutPhoto from "@/public/aboutPhoto.jpeg";
import instagram from "@/public/instagram.png";
import correo from "@/public/correo.png";
import facebook1 from "@/public/facebook1.png";
import Link from "next/link"
import Container from "@/components/ui/container";

const MoreAbout: React.FC = () => {
    
  return (
    <div className="bg-gray-100">

         
<div className="container mx-auto px-4 py-8 border-4 border-gray-600 rounded-lg shadow-xl hover:shadow-2xl hover:border-green-600 transition-all duration-300">
      <h2 className="text-3xl text-center font-bold mb-6 font-epical-glory">More About Me</h2>
      <div className="max-w-lg">
        <Image
          src={aboutPhoto}
          alt="About Photo"
          className="rounded-full w-40 h-40 mx-auto mb-6"
        />
        <h1 className="text-2xl text-center font-epical-glory">Eve Schell</h1>
        <p className="text-xs text-center mb-5">Artist</p>
        <div className="flex mb-4 justify-center items-center">
          <div className="mr-4">
            <a
              href="https://instagram.com/schelleve.art?igshid=MXNoOWU2Y3AxMTkzZQ=="
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300 mb-4"
            >
              <Image src={instagram} width={30} height={10} alt="/" />
            </a>
          </div>
          <div className="mr-4">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <Image src={facebook1} width={30} height={10} alt="/" />
            </a>
          </div>
          <div>
            <a
              href="mailto:artbyeves@gmail.com"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <Image src={correo} width={30} height={10} alt="/" />
            </a>
          </div>
        </div>
        <p className="text-lg text-center mb-4">
          When you see my paintings they are in a conversation with you. You will see them peeking back at you in some paintings. The work is guided by Spirit deciding what will be created on the canvas. These are moments shared with you that have moved my heart. Colors, dimensions, a feeling that wants to be painted. Why do I paint….because the magic calls...
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-4">

            <Link href="/"> <Button>Store</Button></Link>
            <Link href="/contact"><Button>Contact</Button></Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MoreAbout;
