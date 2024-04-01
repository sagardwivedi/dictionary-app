'use client';

import { useFontStore } from '@/lib/hooks/use-font-store';

export function FontProvider({ children }: { children: React.ReactNode }) {
  const { font } = useFontStore();
  return <div className={font}>{children}</div>;
}
