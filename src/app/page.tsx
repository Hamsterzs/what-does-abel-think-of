import prisma from "../lib/prisma";
import Image from "next/image";

const getBands = () => prisma.band.findMany();

export default async function Home() {
  const data = await getBands();

  return (
    <div>
      <h1>Movies</h1>
      {data.map((movie) => (
        <div key={movie.id}>
          <div>title: {movie.title}</div>
          <div>description: {movie.description}</div>
          <Image
            src={"/assets/lalaland.jpeg"}
            alt="movie poster"
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
}
