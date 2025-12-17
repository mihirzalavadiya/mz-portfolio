import type { Metadata } from 'next';
import { Geist, Geist_Mono, Outfit } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mihir Zalavadiya | Frontend Developer',
  description:
    'Portfolio of Mihir Zalavadiya, a Frontend Developer specializing in React, Next.js, and modern UI design based in Bangalore.',
  keywords: [
    'Mihir Zalavadiya',
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'Portfolio',
    'Bangalore',
    'Web Designer',
  ],
  icons: {
    icon: '/favicon-mz.ico',
  },
  verification: {
    google: 'GtXbmx2LjHZEAwvZIzxdx7s7JxFwFG-RIId-VTV8BSQ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
