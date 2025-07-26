"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Picture from "../picture/Picture";
import Link from "next/link";
import { convertToSlug } from "@constants";
import { useDispatch } from "react-redux";
import { updateCategorySlugId } from "../config/features/subCategoryId";

interface HomeCardProps {
  id: string;
  image: string | undefined;
  name: string;
}

const HomeCard = ({ id, image, name }: HomeCardProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCategoryClick = (name: string, id: number) => {
    const categorySlugId = `${convertToSlug(name) + "-" + id}`;
    dispatch(updateCategorySlugId({ categorySlugId }));
    router.push(`/category/${convertToSlug(name) + "-" + id}`);
  };
  return (
    <Link
      href={`${"/category/" + convertToSlug(name) + "-" + id}`}
      onClick={() => handleCategoryClick(name, Number(id))}
      className="group relative h-80 rounded-lg overflow-hidden bg-red-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className={`absolute inset-0 bg-gradient-to-br`}>
        {/* You can replace this with actual images */}
        <div className="absolute inset-0">
          <Picture
            src={image || "/images/home-img-2.png"}
            alt={`${name}-img`}
            className="h-full min-w-[80px] sm:min-w-[120px]  object-fit object-center"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold mb-2 transition-colors text-yellow-600">
          {name}
        </h3>
        <p className="text-sm text-yellow-600 transition-colors">
          View products
        </p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300"></div>

      {/* <h4
        dangerouslySetInnerHTML={{ __html: name }}
        className="text-xs sm:text-sm text-text_color leading-[1.3] text-center font-semibold"
      /> */}
    </Link>
  );
};

export default HomeCard;
