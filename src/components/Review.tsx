/* eslint-disable @next/next/no-img-element */
import React from "react";

const Review = ({
  review,
}: {
  review: {
    image: string;
    title: string;
    review: string;
    stars: number;
    description?: string;
  };
}) => {
  return (
    <div className="container my-6 flex flex-col items-center justify-center gap-8 overflow-auto rounded-lg border-2 border-blue-300 px-6 pt-16 pb-16 lg:flex-row lg:gap-4">
      <div className="lg:w-1/3">
        <img
          src={review.image}
          className="rounded-lg lg:w-[300px]"
          alt="review picture"
        />
      </div>
      <div className="lg:w-1/3">
        <h1 className="text-5xl font-bold lg:text-2xl">{review.title}</h1>
        {review.description && (
          <p className="w-3/4 pt-4 text-3xl lg:text-lg">{review.review}</p>
        )}
      </div>
      <div className="lg:w-1/3">
        <h2 className="text-5xl font-bold lg:text-xl">
          What does Abel think of {review.title}?
        </h2>
        <p className="w-3/4 pt-4 text-3xl lg:text-lg">{review.review}</p>
        <p className="w-3/4 pt-4 text-5xl lg:text-xl">{review.stars}/10</p>
      </div>
    </div>
  );
};

export default Review;
