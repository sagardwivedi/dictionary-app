import { useAudioPlayer } from '@/lib/hooks/use-audio-player';
import { Separator } from '@radix-ui/react-select';
import { PlayIcon } from 'lucide-react';

export const WordDetails = ({ word }: { word?: WordEntry }) => {
  const { playAudio } = useAudioPlayer();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-6xl font-semibold">{word?.word}</h1>
          <p className="text-primary">{word?.phonetic}</p>
        </div>
        <div>
          {word?.phonetics.map((p, index) => (
            <div key={index}>
              {p.audio.length > 0 && (
                <button
                  onClick={() => playAudio(p.audio)}
                  className="rounded-full bg-blue-500 p-2 text-white"
                >
                  <PlayIcon />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        {word?.meanings.map((m, index) => (
          <div key={index}>
            <div>
              <h3 className="flex items-center gap-2">
                {m.partOfSpeech}
                <span className="w-full border-t border-gray-400"></span>
              </h3>
              <div>
                {m.definitions.map((d, index) => (
                  <p key={index}>{d.definition}</p>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p>Synonyms:</p>
              {m.synonyms.map((s, index) => (
                <p key={index}>{s}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Separator />
      <div>{word?.sourceUrls.map((s, index) => <p key={index}>{s}</p>)}</div>
    </div>
  );
};
