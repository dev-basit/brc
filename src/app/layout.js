import "./globals.css";
import { Rubik } from "next/font/google";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import commonStyles from "../../src/app/common.module.css";
import Animation from "@/components/common/animation/animation";

const rubik = Rubik({
  variable: "--rubik",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "BRC",
  description: "BRC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.variable}>
        <div className={commonStyles.navbarHeight} />
        <Animation />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
