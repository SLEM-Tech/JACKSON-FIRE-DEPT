"use client";
import { logoImage } from "@public/images";
import Picture from "@src/components/picture/Picture";
import Link from "next/link";
import { BrickWallFire } from "lucide-react";

interface LogoImageProps {
  className?: string;
}

export const LogoImage = ({ className }: LogoImageProps) => {
  return (
    <Link href="/" className="w-[80px]" style={{ width: "80px" }}>
      <Picture
				src={logoImage}
				alt='logo'
				priority
				loading='lazy'
				className={`!w-[60px] lg:!w-[80px] h-[60px] lg:h-[80px] duration-300 hover:scale-105 transition-[.3] hover:animate-pulse ${className}`}
			/>
      {/* <BrickWallFire className="text-red-400 w-8 h-8"/> */}
    </Link>
  );
};

export const extractCurrencySymbol = (html: string) => {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent?.match(/[\u20A6]/)?.[0] || "";
};
