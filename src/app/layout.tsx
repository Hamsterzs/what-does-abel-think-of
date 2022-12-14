import Link from "next/link";
import "app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Does Abel like</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="h-14 w-screen bg-blue-300">
          <nav className="container flex h-full list-none items-center justify-center gap-12 text-lg">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/bands">
              <li>Bands</li>
            </Link>
            <Link href="/songs">
              <li>Songs</li>
            </Link>
          </nav>
        </div>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
