import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

interface MovieCardProps {
  id: number
  title: string
  posterPath: string | null
  rating: number
}

export default function MovieCard({ id, title, posterPath, rating }: MovieCardProps) {
  const imageUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : "/placeholder.svg?height=450&width=300"

  return (
    <Link href={`/movie/${id}`} className="group">
      <div className="relative overflow-hidden rounded-lg transition-all duration-200 group-hover:scale-105">
        <div className="aspect-[2/3] relative">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-sm font-medium line-clamp-1">{title}</h3>
          <div className="flex items-center mt-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-xs">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

