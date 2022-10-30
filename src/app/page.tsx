import prisma from "../lib/prisma";

const getBands = () => prisma.band.findMany();

export default async function Home() {
  const data = await getBands();

  return (
    <div>
      <h1>what does abel think of this</h1>
      {data.map((band) => (
        <div key={band.id}>
          <div>title: {band.title}</div>
          <div>description: {band.description}</div>
          <div>Review: {band.review}</div>
          <div>Rating: {band.stars}</div>
        </div>
      ))}
    </div>
  );
}
