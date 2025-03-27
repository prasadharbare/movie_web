import { Suspense } from "react"
import PopularMovies from "@/components/popular-movies"
import SearchBar from "@/components/search-bar"
import { Loader2 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4 border-b border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-xl font-bold">MovieDB</h1>
          <SearchBar />
        </div>
      </header>
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Popular Movies</h2>
        <Suspense fallback={<LoadingGrid />}>
          <PopularMovies />
        </Suspense>
      </main>
    </div>
  )
}

function LoadingGrid() {
  return (
    <div className="flex items-center justify-center h-64">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  )
}

