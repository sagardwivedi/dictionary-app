'use client';

import { FormEventHandler, useState } from 'react';

import { ErrorComponent } from '@/components/ErrorMessage';
import { WordDetails } from '@/components/WordDetails';
import { Show } from '@/components/ui/Show';
import { getWord } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';

export default function WordInput() {
  const [value, setValue] = useState('');
  const [word, setWord] = useState<WordEntry>();
  const [error, setError] = useState<ErrorMessage>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { data, error } = await getWord(value);
    setWord(data);
    setError(error);
  };

  return (
    <div className="space-y-12">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row items-center rounded-sm bg-gray-200 px-4 dark:bg-gray-900">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            id="word"
            name="word"
            className="w-full bg-inherit py-4 focus:outline-none"
            min={1}
          />
          <SearchIcon className="text-primary" />
        </div>
      </form>

      <div>
        <Show>
          <Show.When isTrue={!!error}>
            <ErrorComponent error={error} />
          </Show.When>
          <Show.When isTrue={!!word}>
            <WordDetails word={word} />
          </Show.When>
          <Show.Else>
            <div className="flex items-center justify-center">
              <h1>Unlock Understanding: Explore Unknown Words</h1>
            </div>
          </Show.Else>
        </Show>
      </div>
    </div>
  );
}
