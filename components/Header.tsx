import { BookIcon } from 'lucide-react';
import { SelectFont } from './font-select';
import { Separator } from './ui/separator';
import { ModeToggle } from './theme-toggle';

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <BookIcon />
      </div>
      <div className="flex h-10 items-center gap-4">
        <SelectFont />
        <Separator orientation="vertical" />
        <ModeToggle />
      </div>
    </div>
  );
}
