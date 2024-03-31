interface Phonetic {
  audio: string;
  text: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
}

interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface License {
  name: string;
  url: string;
}

interface WordEntry {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

interface ErrorMessage {
  title: string;
  message: string;
  resolution: string;
}
