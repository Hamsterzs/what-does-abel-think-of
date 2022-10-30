/* eslint-disable @next/next/no-img-element */
import React from "react";
import prisma from "lib/prisma";
import Link from "next/link";

const getAllSongs = () => prisma.song.findMany();

const Song = async () => {
  const bands = await getAllSongs();

  return (
    <div className="grid py-16 lg:grid-cols-4">
      {bands.map((band) => (
        <Link key={band.id} href={`/bands/${band.id}`}>
          <div className="box-content flex h-96 flex-col items-center justify-center gap-6 rounded-lg border-2 border-blue-300 py-60 px-8 lg:py-2">
            <img
              src={band.image}
              className="w-10/12 rounded-lg"
              alt="band picture"
            />
            <div className="mt-6 text-5xl lg:text-2xl">{band.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Song;
