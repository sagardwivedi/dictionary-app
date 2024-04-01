import { PlayIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { Each } from '@/components/ui/Each';
import { Show } from '@/components/ui/Show';
import { useAudioPlayer } from '@/lib/hooks/use-audio-player';

interface WordDetailsProps {
  word?: WordEntry;
}

export const WordDetails: FC<WordDetailsProps> = ({ word }) => {
  const { playAudio } = useAudioPlayer();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="mb-4">
          <h1 className="mb-2 text-6xl font-semibold">{word?.word}</h1>
          <p className="text-primary">{word?.phonetic}</p>
        </div>
        <div>
          <Each
            of={word?.phonetics}
            render={(phonetic) => (
              <Show>
                <Show.When isTrue={phonetic.audio.length > 0}>
                  <button
                    onClick={() => playAudio(phonetic.audio)}
                    className="mr-2 rounded-full bg-blue-500 p-2 text-white"
                  >
                    <PlayIcon />
                  </button>
                </Show.When>
              </Show>
            )}
          />
        </div>
      </div>
      <div>
        <Each
          of={word?.meanings}
          render={(meaning) => (
            <div>
              <h3 className="flex items-center gap-2">
                <p className="text-xl font-bold">{meaning.partOfSpeech}</p>
                <span className="w-full border-t border-gray-400"></span>
              </h3>
              <ul className="my-5">
                <Show>
                  <Show.When isTrue={meaning.definitions.length > 0}>
                    <p className="mb-2 text-gray-500">Meaning</p>
                    <Each
                      of={meaning.definitions}
                      render={(definition) => (
                        <>
                          <li className="ml-10 list-disc marker:text-primary">
                            {definition.definition}
                          </li>
                          <Show>
                            <Show.When isTrue={!!definition.example}>
                              <p className="my-1 ml-10 text-gray-500">
                                &quot;{definition.example}&quot;
                              </p>
                            </Show.When>
                          </Show>
                        </>
                      )}
                    />
                  </Show.When>
                </Show>
              </ul>
              <div className="mb-5">
                <Show>
                  <Show.When isTrue={meaning.synonyms.length > 0}>
                    <div className="flex flex-wrap items-center gap-2">
                      <p>Synonyms:</p>
                      <Each
                        of={meaning.synonyms}
                        render={(synonym) => (
                          <p className="text-primary">{synonym}</p>
                        )}
                      />
                    </div>
                  </Show.When>
                  <Show.When isTrue={meaning.antonyms.length > 0}>
                    <div className="flex items-center gap-2">
                      <p>Antonyms:</p>
                      <Each
                        of={meaning.antonyms}
                        render={(antonym) => (
                          <p className="text-primary">{antonym}</p>
                        )}
                      />
                    </div>
                  </Show.When>
                </Show>
              </div>
            </div>
          )}
        />
      </div>
      <span className="mb-3 block h-1 w-full border-t border-gray-400"></span>
      <div className="flex flex-col gap-2">
        <Each
          of={word?.sourceUrls}
          render={(sourceUrl) => (
            <Link href={sourceUrl} className="underline">
              {sourceUrl}
            </Link>
          )}
        />
      </div>
    </div>
  );
};
