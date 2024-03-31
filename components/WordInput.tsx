'use client';

import { FormEventHandler, useState } from 'react';

import { Show } from '@/components/Show';
import { Input } from '@/components/ui/input';
import { getWord } from '@/lib/utils';
import { ErrorComponent } from './ErrorMessage';
import { WordDetails } from './WordDetails';

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
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="search"
          className="rounded-sm p-5"
        />
      </form>
      <div>
        <Show>
          <Show.When isTrue={!!error}>
            <ErrorComponent error={error} />
          </Show.When>
          <Show.When isTrue={!!word}>
            <WordDetails word={word} />
          </Show.When>
        </Show>
      </div>
    </div>
  );
}
