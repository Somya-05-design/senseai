
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryItem {
  image: string;
  text: string;
}

interface CircularGalleryProps {
  items: GalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
}

export const CircularGallery: React.FC<CircularGalleryProps> = ({
  items,
  bend = 3,
  textColor = "#1e293b",
  borderRadius = 0.05,
}) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div 
                className="bg-gray-50 p-6 rounded-xl hover:bg-emerald-50 transition-all duration-300 group border border-gray-100 hover:border-emerald-200 hover:shadow-lg h-full"
                style={{ borderRadius: `${borderRadius * 100}rem` }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors duration-300 shadow-sm">
                    <img 
                      src={item.image} 
                      alt={item.text}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        // Fallback to a simple div with first letter if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-sm font-bold';
                        fallback.textContent = item.text.charAt(0);
                        target.parentNode?.appendChild(fallback);
                      }}
                    />
                  </div>
                  <h3 
                    className="text-lg font-semibold mb-3 flex-grow flex items-center"
                    style={{ color: textColor }}
                  >
                    {item.text}
                  </h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};
