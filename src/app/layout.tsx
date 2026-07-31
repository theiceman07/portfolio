import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { DataTicker } from "@/components/ui/DataTicker";
import { Navigation } from "@/components/layout/Navigation";
import { siteConfig } from "@/lib/data";
import { LineWavesBackground } from "@/components/ui/LineWavesBackground";
import { LoadingProvider } from "@/components/providers/LoadingProvider";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${space.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <LoadingProvider>
          <LoadingScreen />
          <SmoothScrollProvider>
            <LineWavesBackground />
            <CustomCursor />
            <Navigation />
            <main className="relative z-[1]">{children}</main>
            <DataTicker />
          </SmoothScrollProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}

