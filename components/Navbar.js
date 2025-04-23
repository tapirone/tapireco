import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Chat", href: "/chat" },
  { name: "Draw", href: "/draw" },
  { name: "NFT", href: "/nft" },
  { name: "Games", href: "/games" },
  { name: "Buy Credit", href: "/buy" },
  { name: "Goals", href: "/goals" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Presale 🔒", href: "#", disabled: true },
];

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const isActive = (href) => router.pathname === href;

  const renderLink = (link) => {
    if (link.disabled) {
      return (
        <span
          key={link.name}
          className="cursor-not-allowed text-zinc-500 hover:text-zinc-400"
          title="Coming Soon"
        >
          {link.name}
        </span>
      );
    }

    return (
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
  };

  const walletUI = publicKey ? (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-yellow-400 font-mono">
        {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
      </span>
      <button
        onClick={disconnect}
        className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Disconnect
      </button>
    </div>
  ) : (
    <button
      onClick={() => setVisible(true)}
      className="ml-4 px-4 py-2 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-500"
    >
      Connect Wallet
    </button>
  );

  return (
    <nav className="bg-black text-white p-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Tapir 🌐</div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(renderLink)}
          {walletUI}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 px-4">
          {navLinks.map(renderLink)}
          <div>{walletUI}</div>
        </div>
      )}
    </nav>
  );
}

