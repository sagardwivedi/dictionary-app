'use client';

import { LucideMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { Switch } from '@/components/ui/switch';

export function ModeToggle() {
  const [mount, setMount] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <Skeleton className="h-full w-20 rounded-md" />;
  }

  const handleSwitch = () => {
    const value = theme === 'dark' ? 'light' : 'dark';
    setTheme(value);
  };

  return (
    <div className="flex items-center space-x-3">
      <Switch onCheckedChange={handleSwitch} checked={theme === 'dark'} />
      <LucideMoon />
    </div>
  );
}
