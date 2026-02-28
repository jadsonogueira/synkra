import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synkra — Your Own Ordering App for Toronto Chefs",
  description:
    "Stop taking orders in Instagram DMs. Synkra builds you a fully branded online ordering app in 5 days. Trusted by Toronto homemade chefs.",
  keywords: [
    "homemade chef app",
    "Toronto food ordering",
    "Instagram chef app",
    "custom ordering app",
    "food business app Toronto",
    "Synkra",
  ],
  authors: [{ name: "Synkra", url: "https://synkra.ca" }],
  metadataBase: new URL("https://synkra.ca"),
  openGraph: {
    title: "Synkra — Your Own Ordering App for Toronto Chefs",
    description:
      "Stop taking orders in DMs. Get a fully branded ordering app built for your food business in 5 days.",
    url: "https://synkra.ca",
    siteName: "Synkra",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synkra — Your Own Ordering App for Toronto Chefs",
    description:
      "Stop taking orders in DMs. Get a fully branded ordering app built for your food business in 5 days.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
