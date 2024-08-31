import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-900 text-white">
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold">Landslide Alert</h1>
        <p className="mt-4 text-lg md:text-2xl">Stay informed, stay safe.</p>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Image
          src="/landslide-warning-icon.png"
          alt="Landslide Warning"
          width={150}
          height={150}
          className="mb-8"
        />
        <p className="mt-4 text-lg md:text-xl">
          This website provides real-time alerts and updates on landslide-prone
          areas.
        </p>
        <p className="mt-2 text-sm md:text-lg">
          Stay connected with the latest information and ensure your safety by
          staying ahead of potential dangers.
        </p>

        <div className="flex justify-center mt-8 gap-8">
          <div>
            <Link
              href="/alerts"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-7 rounded"
            >
              Alert me
            </Link>
          </div>
          <div>
            <Link
              href="/safety"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Safety Tips
            </Link>
          </div>
        </div>
      </main>

      <footer className="w-full h-24 flex items-center justify-center border-t">
        <p className="text-center text-sm">Landslide Alert System</p>
      </footer>
    </div>
  );
}
