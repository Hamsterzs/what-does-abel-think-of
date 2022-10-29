import prisma from "../lib/prisma";

const getMovies = () => prisma.movies.findMany();

export default async function Home() {
  const data = await getMovies();
  return (
    <div>
      <h1>Movies</h1>
      {JSON.stringify(data)}
    </div>
  );
}
