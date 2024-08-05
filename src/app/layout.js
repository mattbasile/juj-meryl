import './globals.css';
import Head from 'next/head';
export const metadata = {
  title: 'Meryl and Juliana',
  description:
    "Join us in celebrating the love and joy of Meryl Hayes and Juliana Rordorf's wedding. Discover their story, wedding details, and more on their official wedding website.",
  opeGraph: {
    title: 'Meryl and Juliana',
    image: 'https://merylandjuliana.com/sign-in.webp',
    url: 'https://merylandjuliana.com/',
    type: 'website',
  },
  author: 'Matt Basile',
  keywords:
    'Meryl Hayes, Juliana Rordorf, Meryl and Juliana wedding, wedding celebration, wedding details, wedding website',
  twitter: {
    card: 'summary_large_image',
    title: 'Meryl Hayes & Juliana Rordorf Wedding',
    description:
      "Join us in celebrating the love and joy of Meryl Hayes and Juliana Rordorf's wedding. Discover their story, wedding details, and more on their official wedding website.",
    image: 'https://merylandjuliana.com/sign-in.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />

        <link rel="canonical" href="https://merylandjuliana.com/" />
      </Head>
      <body className="font-sweetsans">{children}</body>
    </html>
  );
}
