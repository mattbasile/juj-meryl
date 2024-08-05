import './globals.css';
import Head from 'next/head';
export const metadata = {
  title: 'Meryl and Juliana',
  description: 'They are getting hitched!',
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
        <meta name="theme-color" content="#ffffff" />

        <title>
          Meryl Hayes & Juliana Rordorf Wedding - Celebrate Love & Joy
        </title>
        <meta
          name="description"
          content="Join us in celebrating the love and joy of Meryl Hayes and Juliana Rordorf's wedding. Discover their story, wedding details, and more on their official wedding website."
        />
        <meta
          name="keywords"
          content="Meryl Hayes, Juliana Rordorf, Meryl and Juliana wedding, wedding celebration, wedding details, wedding website"
        />
        <meta name="author" content="Meryl Hayes and Juliana Rordorf" />
        <meta
          property="og:title"
          content="Meryl Hayes & Juliana Rordorf Wedding"
        />
        <meta
          property="og:description"
          content="Join us in celebrating the love and joy of Meryl Hayes and Juliana Rordorf's wedding. Discover their story, wedding details, and more on their official wedding website."
        />
        <meta
          property="og:image"
          content="https://merylandjuliana.com/sign-in.webp"
        />
        <meta property="og:url" content="https://merylandjuliana.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Meryl Hayes & Juliana Rordorf Wedding"
        />
        <meta
          name="twitter:description"
          content="Join us in celebrating the love and joy of Meryl Hayes and Juliana Rordorf's wedding. Discover their story, wedding details, and more on their official wedding website."
        />
        <meta
          name="twitter:image"
          content="https://merylandjuliana.com/sign-in.webp"
        />
        <link rel="canonical" href="https://merylandjuliana.com/" />
      </Head>
      <body className="font-sweetsans">{children}</body>
    </html>
  );
}
