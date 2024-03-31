import { BookIcon } from 'lucide-react';
import { SelectFont } from './font-select';
import { Separator } from './ui/separator';
import { ModeToggle } from './theme-toggle';

export default function Header() {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <BookIcon />
      </div>
      <div className='flex gap-4 h-10 items-center'>
        <SelectFont />
        <Separator orientation="vertical" />
        <ModeToggle />
      </div>
    </div>
  );
}
