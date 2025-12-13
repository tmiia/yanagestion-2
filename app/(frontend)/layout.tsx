import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/(frontend)/components/smooth-scroll";
import { Grid } from "@/(frontend)/utils/grid";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { IntroProvider } from "@/(frontend)/contexts/IntroContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yanagestion | Accompagnement pour les entrepreneurs",
  description: "Yanagestion est une entreprise de conseil en gestion qui accompagne les entrepreneurs dans leur développement.",
  keywords: ["Yanagestion", "Conseil en gestion", "Accompagnement pour les entrepreneurs", "Entreprise de conseil en gestion", "Martinique", "Guyane", "Guadeloupe", "Antilles-Guyane"],
};

export const openGraph: OpenGraph = {
  title: "Yanagestion | Accompagnement pour les entrepreneurs",
  description: "Yanagestion est une entreprise de conseil en gestion qui accompagne les entrepreneurs dans leur développement.",
  images: ["/assets/yanagestion.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <IntroProvider>
            <Grid />
            {children}
          </IntroProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
