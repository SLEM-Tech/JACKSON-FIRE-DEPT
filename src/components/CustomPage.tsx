// components/HeroSection.tsx
import Link from "next/link";
import { MoveRight } from "lucide-react";
import React from "react";
import Image from "next/image";

const CustomPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-[300px]">
      <div className="grid grid-cols-1 gap-12 items-center">
        {/* Left side - Hero content */}
        <div className="relative bg-black rounded-lg overflow-hidden">
          {/* Fire background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 opacity-70"></div>
          <div className="absolute inset-0 bg-black opacity-60">
            <Image src="/images/Fire.png" alt="fire-image" fill/>
          </div>

          <div className="relative z-10 p-12 text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              All your fire safety equipment one trusted supplier
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Everything you need to keep your building protected
            </p>
            <Link href="/category" className="flex w-fit">
              <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                <span>Shop</span>
                <span className="ml-2">
                  <MoveRight />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right side - Product card */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6"> */}
        {/* <div className="relative mb-4">
            <span className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold py-1 px-2 rounded">
              Best Seller
            </span>
            <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold py-1 px-2 rounded">
              FREE delivery
            </span>
          </div> */}

        {/* <div className="mt-8 mb-6">
            <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center h-64"> */}
        {/* Fire Action Sign Mockup */}
        {/* <div className="bg-blue-800 text-white p-4 rounded border-2 border-white text-center text-xs">
                <div className="font-bold mb-2">Fire action</div>
                <div className="space-y-1">
                  <div className="flex items-center justify-start space-x-2">
                    <div className="w-4 h-4 bg-white text-blue-800 rounded-full flex items-center justify-center font-bold">1</div>
                    <span>Sound the fire alarm</span>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    <div className="w-4 h-4 bg-white text-blue-800 rounded-full flex items-center justify-center font-bold">2</div>
                    <span>Call fire brigade</span>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    <div className="w-4 h-4 bg-white text-blue-800 rounded-full flex items-center justify-center font-bold">3</div>
                    <span>Evacuate building</span>
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="bg-red-600 text-white p-1 rounded text-xs">Fire assembly point</div>
                  <div className="bg-green-600 text-white p-1 rounded text-xs">Fire exit</div>
                </div>
              </div> */}
        {/* </div>
          </div> */}

        {/* <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Fire Action (EC) Photoluminescent Sign (150x200mm)
          </h2>
          
          <div className="text-3xl font-bold text-red-600 mb-2">NGN11.25</div>
          <div className="text-sm text-gray-600 mb-6">Inc VAT</div>

          <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
            <span>Add to cart</span>
            <span className="text-xl">+</span>
          </button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CustomPage;
