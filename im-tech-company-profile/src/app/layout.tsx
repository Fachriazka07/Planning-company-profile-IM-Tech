import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import 'remixicon/fonts/remixicon.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'IM Tech | Solusi Digital untuk Bisnis Anda',
  description:
    'IM Tech memberikan solusi profesional web dan mobile app untuk kebutuhan bisnis Anda. Web Development, App Development, UI/UX Design, dan Maintenance.',
  keywords: ['web development', 'mobile app', 'software house', 'sumedang', 'jawa barat'],
  authors: [{ name: 'IM Tech Solution' }],
  openGraph: {
    title: 'IM Tech | Solusi Digital untuk Bisnis Anda',
    description:
      'IM Tech memberikan solusi profesional web dan mobile app untuk kebutuhan bisnis Anda.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'IM Tech',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
