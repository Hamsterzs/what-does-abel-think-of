/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useSpringCarousel } from "react-spring-carousel";
import Link from "next/link";

type CarouselProps = {
  id: string;
  title: string;
  image: string;
  link: string;
}[];

const Carousel = ({ list }: { list: CarouselProps }) => {
  const carouselItems = list.map((item) => ({
    id: item.id,
    renderItem: (
      <Link
        href={item.link}
        className="mx-auto flex w-[600px] flex-col items-center justify-center rounded-md border-2 border-blue-300 shadow-lg"
      >
        <img
          src={item.image}
          className="w-3/4 lg:w-1/2"
          alt={`Image for ${item.title}`}
        />
        <h1 className="mt-8 text-center text-5xl lg:text-4xl">{item.title}</h1>
      </Link>
    ),
  }));

  const { carouselFragment, slideToNextItem, slideToPrevItem } =
    useSpringCarousel({
      items: carouselItems,
      itemsPerSlide: 1,
      withLoop: true,
    });

  return (
    <div className="box-content flex w-full py-5">
      {list.length > 1 && (
        <button onClick={slideToPrevItem} className="text-4xl">
          {"<"}
        </button>
      )}

      <div className=" mx-auto flex h-[800px] w-full items-center justify-center overflow-hidden">
        {carouselFragment}
      </div>

      {list.length > 1 && (
        <button onClick={slideToNextItem} className="text-4xl">
          {">"}
        </button>
      )}
    </div>
  );
};

export default Carousel;
