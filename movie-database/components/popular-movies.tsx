import { getPopularMovies } from "@/lib/api"
import MovieCard from "./movie-card"
import Pagination from "./pagination"

export default async function PopularMovies({ page = 1 }: { page?: number }) {
  const data = await getPopularMovies(page)

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
      <Pagination currentPage={page} totalPages={data.total_pages} basePath="/" />
    </div>
  )
}

