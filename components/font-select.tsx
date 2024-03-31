'use client';

import { useFontStore } from '@/lib/hooks/use-font-store';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function SelectFont() {
  const { font, setFont } = useFontStore();

  return (
    <Select value={font} onValueChange={setFont}>
      <SelectTrigger className="w-20 border-none">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value="font-sans">Sans</SelectItem>
        <SelectItem value="font-serif">Serif</SelectItem>
      </SelectContent>
    </Select>
  );
}
