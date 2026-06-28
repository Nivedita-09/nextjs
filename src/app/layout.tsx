import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChadWallet Family — Social Crypto Trading",
  description:
    "Trade smarter together. Join the social crypto trading platform where you can follow top traders, copy their moves, and never miss an opportunity.",
  keywords: ["crypto", "trading", "social trading", "copy trading", "bitcoin", "defi"],
  openGraph: {
    title: "ChadWallet Family — Social Crypto Trading",
    description: "Trade smarter together. Never miss the next big move.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
