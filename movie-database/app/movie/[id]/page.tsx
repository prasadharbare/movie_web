import { Suspense } from "react"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import SearchBar from "@/components/search-bar"
import MovieDetails from "@/components/movie-details"
import MovieCast from "@/components/movie-cast"

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4 border-b border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold">
            MovieDB
          </Link>
          <SearchBar />
        </div>
      </header>
      <main className="container mx-auto p-4">
        <Suspense fallback={<LoadingDetails />}>
          <MovieDetails id={params.id} />
        </Suspense>
        <Suspense fallback={<LoadingCast />}>
          <MovieCast id={params.id} />
        </Suspense>
      </main>
    </div>
  )
}

function LoadingDetails() {
  return (
    <div className="flex items-center justify-center h-64">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  )
}

function LoadingCast() {
  return (
    <div className="flex items-center justify-center h-32 mt-4">
      <Loader2 className="h-6 w-6 animate-spin text-primary" />
    </div>
  )
}

