import { FontProvider } from '@/components/font-provider';
import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';
import type { Metadata } from 'next';

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
