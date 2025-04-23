// layout/Default.js
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function DefaultLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Tapir Ecosystem` : 'Tapir Ecosystem'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
        <Navbar />
        <main className="p-6 pt-20 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </div>
    </>
  );
}
