import Review from "components/Review";
import React from "react";
import prisma from "lib/prisma";

const getAllBands = (id: string) => prisma.song.findFirst({ where: { id } });

const Song = async ({ params }: { params: { songId: string } } | any) => {
  const song = await getAllBands(params.songId);

  if (!song) return "No song Found";

  return (
    <Review
      review={{
        title: song.title,
        review: song.review,
        image: song.image,
        stars: song.stars,
      }}
    />
  );
};

export default Song;
