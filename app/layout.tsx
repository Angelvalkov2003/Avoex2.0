import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avoex - Website Design & Marketing Agency | Get More Clients",
  description:
    "Professional website design, marketing agency services, digital advertising, and web development. We help businesses attract more clients through custom websites, marketing campaigns, and automation solutions.",
  keywords: [
    "Avoex",
    "website design",
    "websites",
    "marketing",
    "marketing agency",
    "реклама",
    "маркетинг агенция",
    "уебсайти",
    "изработка на уебсайт",
    "повече клиенти",
    "web design",
    "digital marketing",
    "social media ads",
    "SEO",
    "e-commerce",
    "business automation",
    "custom websites",
    "web development",
  ],
  authors: [{ name: "Avoex" }],
  creator: "Avoex",
  publisher: "Avoex",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Avoex - Website Design, Marketing Agency & Digital Solutions | Get More Clients",
    description:
      "Professional website design, marketing agency services, digital advertising, and web development. We help businesses attract more clients through custom websites, marketing campaigns, and automation solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Avoex - Website Design and Marketing Agency",
      },
    ],
    siteName: "Avoex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avoex - Website Design, Marketing Agency & Digital Solutions",
    description:
      "Professional website design, marketing agency services, digital advertising, and web development. Get more clients with our expert services.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
