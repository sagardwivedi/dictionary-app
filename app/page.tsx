import Header from '@/components/Header';
import WordInput from '@/components/WordInput';

export default function Home() {
  return (
    <main className="mx-auto w-[90%] space-y-12 max-w-3xl p-5 md:p-10">
      <Header />
      <WordInput />
    </main>
  );
}
