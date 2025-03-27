import Image from "next/image"
import { Star, Clock } from "lucide-react"
import { getMovieDetails } from "@/lib/api"

export default async function MovieDetails({ id }: { id: string }) {
  const movie = await getMovieDetails(id)

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/placeholder.svg?height=450&width=800"

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.svg?height=450&width=300"

  const formatRuntime = (minutes: number) => {
    if (!minutes) return "N/A"
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={backdropUrl || "/placeholder.svg"}
            alt={movie.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
        </div>
      </div>

      <div className="relative z-10 pt-4 pb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
              <Image
                src={posterUrl || "/placeholder.svg"}
                alt={movie.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span>{movie.vote_average?.toFixed(1) || "N/A"}</span>
              </div>

              {movie.release_date && <div>{new Date(movie.release_date).getFullYear()}</div>}

              {movie.runtime && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{formatRuntime(movie.runtime)}</span>
                </div>
              )}

              {movie.genres && movie.genres.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre: any) => (
                    <span key={genre.id} className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-300">{movie.overview || "No overview available."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

