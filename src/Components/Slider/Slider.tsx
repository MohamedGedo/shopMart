"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Slider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <Image
              src={img}
              alt={title}
              width={400}
              height={300}
              className="w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
