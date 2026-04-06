import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter, Nunito, PT_Sans, Manrope, Alumni_Sans, Montserrat, Oswald, Open_Sans } from 'next/font/google';
// import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/style.scss';

const inconsolata = localFont({
  src: '../../public/fonts/Inconsolata.woff2',
  variable: '--font-inconsolata',
  weight: '200 900',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const alumniSans = Alumni_Sans({
  subsets: ['latin'],
  variable: '--font-alumni-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-pt-sans',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anna Baidikova',
  description: 'Frontend & Fullstack Developer based in Stockholm. React, TypeScript, Node.js — from pixel to API.',
  openGraph: {
    title: 'Anna Baidikova — Frontend & Fullstack Developer',
    description: 'React, TypeScript, Node.js. Projects from landing pages to fullstack apps with REST API and auth. Based in Stockholm, open to opportunities in Scandinavia.',
    url: 'https://anna-baidikova-portfolio.vercel.app',
    siteName: 'Anna Baidikova Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anna Baidikova — Frontend & Fullstack Developer',
    description: 'React, TypeScript, Node.js. Based in Stockholm.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${nunito.variable} ${ptSans.variable} ${manrope.variable} ${alumniSans.variable} ${montserrat.variable} ${oswald.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preload" href="/fonts/Inconsolata.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={inconsolata.className}>
        {/* <ThemeProvider> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
