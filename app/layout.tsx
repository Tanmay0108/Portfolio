import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
