import React from 'react';
import Image from 'next/image';
import image1 from '@/public/image1.jpeg';
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";


const Contact: React.FC = () => {
    
    const styles = {
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '3rem',
        color: '#0c0b0b', // Cambia esto por el color gris que desees
        textShadow: '3px 3px 8px rgba(243, 238, 238, 0.5)', // Ajusta los valores para la sombra y profundidad
        
      };

      
    
  return (
    <div> 
         <Container>
         <div className=""> 
   

        <div className=" p-4 sm:p-6 lg:p-6 rounded-xl overflow-hidden">
      <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover  "
        style={{ backgroundImage: "url('https://res.cloudinary.com/dglsg2tet/image/upload/v1703175152/paint-canvas_zq5n6b.jpg')" }}>
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-gray-100 ">
          <div style={styles}>
      Lets talk!
    </div>
          </div>
        </div>
      </div>
      </div>
 
    </div>
 
      <div className="max-w-screen-xl mx-auto px-4 py-12 text-center bg">
        <div className="mb-4 relative">
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h2 className="text-3xl font-bold font-epical-glory mb-3">Lets talk!</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 mb-6 md:mb-0">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex-1">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  required
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center">
          <Button
            type="submit"
          
          >
            Send
          </Button>
        </div>
      </div>

      </Container> 
    </div>
   
  );
};

export default Contact;
