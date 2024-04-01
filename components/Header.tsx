import { BookIcon } from 'lucide-react';

import { SelectFont } from '@/components/font-select';
import { ModeToggle } from '@/components/theme-toggle';

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <BookIcon />
      <div className="flex h-10 items-center gap-4">
        <SelectFont />
        <div className="h-full w-px bg-gray-500"></div>
        <ModeToggle />
      </div>
    </div>
  );
}
