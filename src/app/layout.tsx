import '../styles/globals.css';
import '../styles/globals.scss';

import React from 'react';

import type { Metadata } from 'next';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ThemeProvider from '@/components/ui/theme/provider';
import EStorageKeys from '@/constants/keys';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          storageKey={EStorageKeys.theme}
          enableSystem
        >
          <Navbar />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
