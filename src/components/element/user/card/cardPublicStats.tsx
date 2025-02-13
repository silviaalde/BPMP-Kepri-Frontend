'use client';

import { useState, useEffect, useRef } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface CardPublicStatsProps {
  image: StaticImageData;
  count: number;
  title: string;
}

const CardPublicStats = ({ image, count, title }: CardPublicStatsProps) => {
  const [currentCount, setCurrentCount] = useState(0); // Untuk animasi angka
  const cardRef = useRef<HTMLDivElement | null>(null); // Ref untuk Intersection Observer
  const [isVisible, setIsVisible] = useState(false); // Mengecek apakah komponen terlihat di viewport

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set ke true jika komponen terlihat
        }
      },
      {
        threshold: 0.5, // 50% dari elemen harus terlihat sebelum dianggap terlihat
      }
    );

    const currentCardRef = cardRef.current; // Copy the current ref to a local variable

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  useEffect(() => {
    if (isVisible) {
      let currentValue = 0;
      const increment = Math.ceil(count / 50); // Tingkat kenaikan angka
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= count) {
          currentValue = count;
          clearInterval(interval); // Hentikan interval jika mencapai target
        }
        setCurrentCount(currentValue);
      }, 50); // Kecepatan animasi (20ms per langkah)
    }
  }, [isVisible, count]); // Only re-run this effect when 'isVisible' or 'count' changes

  return (
    <div ref={cardRef} className="flex flex-col items-center mt-[-70px] gap-4 py-3">
      <div className="h-28 w-28 bg-gray-100 p-1">
        <div className="w-full h-full bg-white flex items-center justify-center">
          <Image src={image} alt="icons" className="h-14 w-14" />
        </div>
      </div>
      <p className="text-4xl text-blue-secondary font-bold">{currentCount}</p>
      <p >{title}</p>
    </div>
  );
};

export default CardPublicStats;
