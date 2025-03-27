import { searchMovies } from "@/lib/api"
import MovieCard from "./movie-card"
import Pagination from "./pagination"

export default async function SearchResults({ query, page = 1 }: { query: string; page?: number }) {
  const data = await searchMovies(query, page)

  if (data.results.length === 0) {
    return <div className="text-center py-10">No results found for "{query}"</div>
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.results.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={data.total_pages}
        basePath={`/search?query=${encodeURIComponent(query)}`}
      />
    </div>
  )
}

