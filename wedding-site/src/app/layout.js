import './globals.css';

export const metadata = {
  title: 'Meryl and Juliana',
  description: 'They are getting hitched!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sweetsans">{children}</body>
    </html>
  );
}
