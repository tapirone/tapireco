import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-gray-900 border-b border-pink-500 flex flex-wrap items-center justify-between text-white shadow-md">
      <div className="text-xl font-bold text-pink-400">🦝 Tapir</div>
      <div className="flex flex-wrap gap-4 text-sm sm:text-base">
        <Link href="/" className="hover:text-pink-300">Home</Link>
        <Link href="/chat" className="hover:text-pink-300">Chat</Link>
        <Link href="/draw" className="hover:text-pink-300">Draw</Link>
        <Link href="/nft" className="hover:text-pink-300">NFT</Link>
        <Link href="/subscribe" className="hover:text-pink-300">Subscribe</Link>
      </div>
    </nav>
  );
}
