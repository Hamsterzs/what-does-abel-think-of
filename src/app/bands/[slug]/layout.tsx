import React from "react";
import prisma from "lib/prisma";
import Review from "components/Review";

const getBand = (id: string) =>
  prisma.band.findFirst({ where: { id }, include: { Song: true } });

const Layout = async ({
  children,
  params,
}:
  | {
      children: React.ReactNode;
      params: { slug: string };
    }
  | any) => {
  const band = await getBand(params.slug);

  if (!band) return "band not found";

  return (
    <>
      <Review
        review={{
          title: band.title,
          image: band.image,
          review: band.review,
          stars: band.stars,
          description: band.description,
        }}
      />
      {children}
    </>
  );
};

export default Layout;
