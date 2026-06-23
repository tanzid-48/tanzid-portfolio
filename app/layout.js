import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});
export const metadata = {
  title: "Tanzid | Full Stack Developer",
  description:
    "I'm Tanzid, a passionate Full Stack Developer specializing in React, Next.js, and MongoDB. Explore my projects and portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
