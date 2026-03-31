import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/style.scss';

const inconsolata = localFont({
  src: '../../public/fonts/Inconsolata.woff2',
  variable: '--font-inconsolata',
  weight: '200 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anna Baidikova',
  description: 'Anna Baidikova - Frontend & Web Developer — creating user-friendly and beautiful interfaces with a focus on responsiveness, speed, and accessibility',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preload" href="/fonts/Inconsolata.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={inconsolata.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
