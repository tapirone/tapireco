import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Chat", href: "/chat" },
  { name: "Draw", href: "/draw" },
  { name: "NFT", href: "/nft" },
  { name: "Games", href: "/games" }, // ✅ Tambahan menu Games
  { name: "Buy Credit", href: "/buy" },
  { name: "Goals", href: "/goals" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Presale", href: "https://www.buytapirsolanameme.com", external: true },
];

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href) => router.pathname === href;

  const renderLink = (link) =>
    link.external ? (
      <a
        key={link.name}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`cursor-pointer hover:text-yellow-400 ${
          isActive(link.href) ? 'text-yellow-400 font-semibold' : ''
        }`}
      >
        {link.name}
      </a>
    ) : (
      <Link key={link.name} href={link.href}>
        <span
          className={`cursor-pointer hover:text-yellow-400 ${
            isActive(link.href) ? 'text-yellow-400 font-semibold' : ''
          }`}
        >
          {link.name}
        </span>
      </Link>
    );

  return (
    <nav className="bg-black text-white p-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Tapir 🌐</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(renderLink)}
          <button className="ml-4 px-4 py-2 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-500">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 px-4">
          {navLinks.map(renderLink)}
          <button className="w-full mt-2 px-4 py-2 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-500">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
}
