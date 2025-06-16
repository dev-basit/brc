import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import commonStyles from "../../src/app/common.module.css";
import Animation from "@/components/common/animation/animation";

const SpaceGrotest = Space_Grotesk({
  variable: "--space-grotesk",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "BRC",
  description: "BRC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SpaceGrotest.variable}>
        <div className={commonStyles.navbarHeight} />
        <Animation />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
