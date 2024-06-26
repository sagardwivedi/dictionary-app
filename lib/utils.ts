import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ResponseData {
  error?: ErrorMessage;
  data?: WordEntry;
}

export async function getWord(value: string): Promise<ResponseData> {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${value.toLowerCase()}`,
  );

  if (response.status === 404) {
    const errorData = await response.json();
    return { error: errorData as ErrorMessage };
  }

  if (!response.ok) {
    throw new Error('Failed to fetch word data');
  }

  const responseData = await response.json();
  return { data: responseData[0] as WordEntry };
}
