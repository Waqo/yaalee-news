import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { isValidLanguage, type Language } from '@/lib/utils';

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'om' },
    { lang: 'am' },
  ];
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isValidLanguage(params.lang)) {
    notFound();
  }

  const lang = params.lang as Language;

  return (
    <>
      <Header lang={lang} />
      <main className="min-h-screen">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
