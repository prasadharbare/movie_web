import Image from "next/image"
import { getMovieCast } from "@/lib/api"

export default async function MovieCast({ id }: { id: string }) {
  const data = await getMovieCast(id)
  const cast = data.cast?.slice(0, 6) || [] // Show only first 6 cast members

  if (!cast.length) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Cast</h2>
        <p className="text-gray-400">No cast information available.</p>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Cast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cast.map((person: any) => {
          const profileUrl = person.profile_path
            ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
            : "/placeholder.svg?height=185&width=185"

          return (
            <div key={person.id} className="text-center">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                <Image
                  src={profileUrl || "/placeholder.svg"}
                  alt={person.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 185px"
                />
              </div>
              <h3 className="font-medium text-sm line-clamp-1">{person.name}</h3>
              <p className="text-xs text-gray-400 line-clamp-1">{person.character || "Unknown"}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

