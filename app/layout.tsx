import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';

import '@stream-io/video-react-sdk/dist/css/styles.css';

import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meet Up Now',
  description: 'Video calling app for meetrings and conferences',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: '/icons/yoom-logo.svg',
            socialButtonsVariant: 'iconButton',
          },
          variables: {
            colorText: '#fff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1c1f2e',
            colorInputBackground: '#2b2e3e',
            colorInputText: '#fff',
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
