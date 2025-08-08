"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Picture from "../picture/Picture";
import Link from "next/link";
import { convertToSlug } from "@constants";
import { useDispatch } from "react-redux";
import { updateCategorySlugId } from "../config/features/subCategoryId";
import { ChevronRight, ArrowRight } from "lucide-react";

interface HomeCardProps {
  id: string;
  image: string | undefined;
  name: string;
  productCount?: number;
  description?: string;
}

const HomeCard = ({ 
  id, 
  image, 
  name, 
  productCount, 
  description 
}: HomeCardProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleCategoryClick = (name: string, id: number) => {
    const categorySlugId = `${convertToSlug(name) + "-" + id}`;
    dispatch(updateCategorySlugId({ categorySlugId }));
    router.push(`/category/${convertToSlug(name) + "-" + id}`);
  };

  return (
    <Link
      href={`${"/category/" + convertToSlug(name) + "-" + id}`}
      onClick={() => handleCategoryClick(name, Number(id))}
      className="group relative block min-w-[280px] md:min-w-[320px] h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Picture
          src={image || "/images/home-img-2.png"}
          alt={`${name} category`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
        {/* Top Section - Product Count */}
        {productCount && (
          <div className="flex justify-end">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
              {productCount} {productCount === 1 ? 'item' : 'items'}
            </span>
          </div>
        )}

        {/* Bottom Section - Category Info */}
        <div className="space-y-4">
          {/* Category Name */}
          <div>
            <h3 
              dangerouslySetInnerHTML={{ __html: name }}
              className="text-2xl md:text-3xl font-bold text-white leading-tight transition-transform duration-300 group-hover:translate-y-[-4px]"
            />
            {description && (
              <p className="text-white/90 text-sm md:text-base mt-2 opacity-90">
                {description}
              </p>
            )}
          </div>

          {/* Call to Action */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-white group-hover:text-white transition-colors">
              <span className="text-sm md:text-base font-medium mr-2">
                Shop Collection
              </span>
              <div className={`transform transition-transform duration-300 ${
                isHovered ? 'translate-x-2' : 'translate-x-0'
              }`}>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Progress Bar Animation */}
          <div className="w-full bg-white/20 rounded-full h-1 overflow-hidden">
            <div className={`h-full bg-white rounded-full transition-all duration-700 ${
              isHovered ? 'w-full' : 'w-0'
            }`} />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-6 left-6 w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center">
        <div className="w-6 h-6 bg-white/20 rounded-full" />
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent" />
    </Link>
  );
};

// Alternative Minimal Version
export const HomeCardMinimal = ({ 
  id, 
  image, 
  name, 
  productCount 
}: HomeCardProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleCategoryClick = (name: string, id: number) => {
    const categorySlugId = `${convertToSlug(name) + "-" + id}`;
    dispatch(updateCategorySlugId({ categorySlugId }));
    router.push(`/category/${convertToSlug(name) + "-" + id}`);
  };

  return (
    <Link
      href={`${"/category/" + convertToSlug(name) + "-" + id}`}
      onClick={() => handleCategoryClick(name, Number(id))}
      className="group relative block min-w-[250px] h-[300px] rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-[70%] overflow-hidden bg-gray-100">
        <Picture
          src={image || "/images/home-img-2.png"}
          alt={`${name} category`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {productCount && (
          <div className="absolute top-3 right-3 bg-black text-white text-xs font-medium px-2 py-1 rounded-full">
            {productCount}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="h-[30%] p-4 flex flex-col justify-center">
        <h3 
          dangerouslySetInnerHTML={{ __html: name }}
          className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1"
        />
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            View Collection
          </span>
          <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`} />
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;