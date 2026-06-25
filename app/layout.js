import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Tanzid Mondol - Full Stack Developer",
  description:
    "Tanzid Mondol is a Full Stack Developer specializing in MERN Stack, Next.js, Java, Flutter, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} font-outfit leading-8 dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
