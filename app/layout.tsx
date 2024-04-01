import type { Metadata } from 'next';

import { FontProvider } from '@/lib/providers/font-provider';
import { ThemeProvider } from '@/lib/providers/theme-provider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Dictionary App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FontProvider>{children}</FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
