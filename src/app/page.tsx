import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold text-white mb-4">
          Secure your data with a single press
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          hasteo empowers you to wipe your smartphone data instantly if it’s lost or stolen.
        </p>
        <button className="px-8 py-3 bg-purple-dark text-white rounded-lg hover:bg-purple-light transition">
          Pre-order now
        </button>
      </div>
    </main>
  )
}  
