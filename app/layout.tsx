import './global.css';
import 'katex/dist/katex.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <title>Rikkic Lab</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffeded" />
        <meta name="description" content="Rikkic Lab" />
        <meta name="keywords" content="Rikkic" />
        <meta name="og:title" content="Rikkic Lab" />
        <meta name="og:site_name" content="Rikkic Lab" />
        <meta name="og:locale" content="zh_CN" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              type: 'static',
            },
          }}
        >
          {children}
        </RootProvider>
        <script defer src="https://analytics.ejunz.com/script.js" data-website-id="460629a1-7362-457c-8549-17a67fa86fa7"></script>
      </body>
    </html>
  );
}
