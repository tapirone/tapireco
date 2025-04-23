// pages/buy.js
export default function BuyCredit() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Buy Credits</h1>
        <p className="text-zinc-300 mb-8 text-lg">
          Credits are used to generate images in Tapir Draw. 1 Credit = 1 Image.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CreditCard amount={25} price="0.1 SOL" />
          <CreditCard amount={100} price="0.35 SOL" />
          <CreditCard amount={280} price="1 SOL" />
        </div>

        <p className="text-sm text-zinc-400 mt-8">
          * Payments will be made in SOL. ALPIR support is coming soon.
        </p>
      </div>
    </div>
  );
}

function CreditCard({ amount, price }) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-6 hover:shadow-lg border border-zinc-700 text-center">
      <h2 className="text-2xl font-bold text-yellow-400">{amount} Credits</h2>
      <p className="text-zinc-300 mt-2 mb-4">For Tapir Draw</p>
      <div className="text-lg font-semibold mb-4">{price}</div>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl hover:bg-yellow-500 transition">
        Pay with SOL
      </button>
    </div>
  );
}
