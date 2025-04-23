import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-zinc-900 py-4 px-6 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-yellow-400 font-bold text-xl" onClick={closeMenu}>
          Tapir
        </Link>
        {/* Mobile menu button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-yellow-400">Home</Link>
          <Link href="/chat" className="text-white hover:text-yellow-400">Chat</Link>
          <Link href="/draw" className="text-white hover:text-yellow-400">Draw</Link>
          <Link href="/nft" className="text-white hover:text-yellow-400">NFT</Link>
          <Link href="/games" className="text-white hover:text-yellow-400">Games</Link>
          <Link href="/buy-credit" className="text-white hover:text-yellow-400">Buy Credit</Link>
          <Link href="/presale" className="text-white hover:text-yellow-400 font-semibold">Presale</Link>
          <Link href="/roadmap" className="text-white hover:text-yellow-400">Roadmap</Link>
          <Link href="/goals" className="text-white hover:text-yellow-400">Goals</Link>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-zinc-900 flex flex-col items-start px-6 py-4 space-y-2 md:hidden z-40">
            <Link href="/" className="text-white hover:text-yellow-400" onClick={closeMenu}>Home</Link>
            <Link href="/chat" className="text-white hover:text-yellow-400" onClick={closeMenu}>Chat</Link>
            <Link href="/draw" className="text-white hover:text-yellow-400" onClick={closeMenu}>Draw</Link>
            <Link href="/nft" className="text-white hover:text-yellow-400" onClick={closeMenu}>NFT</Link>
            <Link href="/games" className="text-white hover:text-yellow-400" onClick={closeMenu}>Games</Link>
            <Link href="/buy-credit" className="text-white hover:text-yellow-400" onClick={closeMenu}>Buy Credit</Link>
            <Link href="/presale" className="text-white hover:text-yellow-400 font-semibold" onClick={closeMenu}>Presale</Link>
            <Link href="/roadmap" className="text-white hover:text-yellow-400" onClick={closeMenu}>Roadmap</Link>
            <Link href="/goals" className="text-white hover:text-yellow-400" onClick={closeMenu}>Goals</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
