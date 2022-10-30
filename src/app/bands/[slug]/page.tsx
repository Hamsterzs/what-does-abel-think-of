/* eslint-disable @next/next/no-img-element */
import Carousel from "components/Carousel";
import prisma from "lib/prisma";
import React from "react";

const getBand = (id: string) =>
  prisma.band.findFirst({ where: { id }, include: { Song: true } });

const Band = async ({ params }: { params: { songId: string } }) => {
  const band = await getBand(params.songId);

  if (!band) return <h1>404</h1>;

  return (
    <>
      <div className="container my-6 mb-20 flex flex-col items-center justify-center gap-8 overflow-auto rounded-lg border-2 border-blue-300 px-6 pt-16 pb-16 lg:gap-4">
        <h2 className="text-5xl lg:text-3xl">Songs by band</h2>
        <Carousel
          list={band.Song.map((song) => ({
            id: song.id,
            title: song.title,
            image: song.image,
            link: `/bands/${song.by}/song/${song.id}`,
          }))}
        />
      </div>
    </>
  );
};

export default Band;
