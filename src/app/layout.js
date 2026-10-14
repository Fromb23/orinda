import { DM_Sans, Lora } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.publicName} | Mathematics and Physics Educator`,
  description:
    "Professional teaching portfolio of Ogira Mark Orinda, a Mathematics and Physics educator and Bachelor of Education Science student.",
  openGraph: {
    title: `${profile.publicName} | Mathematics and Physics Educator`,
    description:
      "Teaching experience, education, leadership and professional documents for Ogira Mark Orinda.",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: profile.portrait,
        width: 1254,
        height: 1254,
        alt: "Professional portrait of Ogira Mark Orinda",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
