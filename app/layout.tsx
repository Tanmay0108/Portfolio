import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanmay Potnurwar | AI, Data & Backend",
  description:
    "Portfolio of Tanmay Potnurwar, a final-year Computer Engineering student building practical AI, data, and backend systems.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Tanmay Potnurwar | AI, Data & Backend",
    description:
      "Practical systems across AI, data analytics, generative AI, and backend engineering by Tanmay Potnurwar.",
    type: "website",
    locale: "en_US",
    siteName: "Tanmay Potnurwar Portfolio",
    images: [
      {
        url: "/profile/tanmay.jpg",
        width: 800,
        height: 800,
        alt: "Tanmay Potnurwar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Potnurwar | AI, Data & Backend",
    description:
      "Practical systems across AI, data analytics, generative AI, and backend engineering by Tanmay Potnurwar.",
    images: ["/profile/tanmay.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Geist:wght@300;400;500;600;700;800&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var isL=s==='light'||(!s&&!d);if(isL){document.documentElement.classList.add('light');document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark');document.documentElement.classList.remove('light')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
