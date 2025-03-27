const API_KEY = "c45e8f3c1b3f1b3d3b5b1c3b5e7d3" // Note: This is a placeholder key

export interface Movie {
  id: number
  title: string
  poster_path: string
  backdrop_path: string
  overview: string
  vote_average: number
  release_date: string
  runtime?: number
  genres?: { id: number; name: string }[]
}

export interface CastMember {
  id: number
  name: string
  character: string
  profile_path: string | null
}

// Mock data for popular movies in case the API fails
const mockPopularMovies = {
  page: 1,
  results: [
    {
      id: 1,
      title: "Venom: Let There Be Carnage",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      vote_average: 7.2,
      release_date: "2021-09-30",
    },
    {
      id: 2,
      title: "Shang-Chi",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
      vote_average: 7.8,
      release_date: "2021-09-01",
    },
    {
      id: 3,
      title: "Clifford",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend.",
      vote_average: 7.5,
      release_date: "2021-11-10",
    },
    {
      id: 4,
      title: "Dune",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
      vote_average: 8.0,
      release_date: "2021-10-22",
    },
  ],
  total_pages: 10,
  total_results: 200,
}

// Mock data for top rated movies
const mockTopRatedMovies = {
  page: 1,
  results: [
    {
      id: 5,
      title: "The Godfather",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      vote_average: 8.7,
      release_date: "1972-03-14",
    },
    {
      id: 6,
      title: "The Shawshank Redemption",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      vote_average: 8.7,
      release_date: "1994-09-23",
    },
    {
      id: 7,
      title: "The Dark Knight",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      vote_average: 8.5,
      release_date: "2008-07-16",
    },
    {
      id: 8,
      title: "12 Angry Men",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      vote_average: 8.5,
      release_date: "1957-04-10",
    },
  ],
  total_pages: 10,
  total_results: 200,
}

// Mock data for upcoming movies
const mockUpcomingMovies = {
  page: 1,
  results: [
    {
      id: 9,
      title: "The Godfather",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      vote_average: 8.7,
      release_date: "2023-03-14",
    },
    {
      id: 10,
      title: "The Shawshank Redemption",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      vote_average: 8.7,
      release_date: "2023-09-23",
    },
    {
      id: 11,
      title: "The Dark Knight",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      vote_average: 8.5,
      release_date: "2023-07-16",
    },
    {
      id: 12,
      title: "12 Angry Men",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      vote_average: 8.5,
      release_date: "2023-04-10",
    },
  ],
  total_pages: 10,
  total_results: 200,
}

// Mock data for movie details
const mockMovieDetails = {
  id: 1,
  title: "Venom: Let There Be Carnage",
  poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
  backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
  overview:
    "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
  vote_average: 7.2,
  release_date: "2021-09-30",
  runtime: 97,
  genres: [
    { id: 28, name: "Action" },
    { id: 878, name: "Science Fiction" },
    { id: 12, name: "Adventure" },
  ],
}

// Mock data for movie cast
const mockMovieCast = {
  id: 1,
  cast: [
    {
      id: 101,
      name: "Tom Hardy",
      character: "Eddie Brock / Venom",
      profile_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
    },
    {
      id: 102,
      name: "Woody Harrelson",
      character: "Cletus Kasady / Carnage",
      profile_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
    },
    {
      id: 103,
      name: "Michelle Williams",
      character: "Anne Weying",
      profile_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
    },
    {
      id: 104,
      name: "Naomie Harris",
      character: "Frances Barrison / Shriek",
      profile_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
    },
    {
      id: 105,
      name: "Reid Scott",
      character: "Dr. Dan Lewis",
      profile_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
    },
    {
      id: 106,
      name: "Stephen Graham",
      character: "Detective Mulligan",
      profile_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
    },
  ],
}

// Mock data for search results
const mockSearchResults = {
  page: 1,
  results: [
    {
      id: 1,
      title: "Venom: Let There Be Carnage",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      vote_average: 7.2,
      release_date: "2021-09-30",
    },
    {
      id: 2,
      title: "Venom",
      poster_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      backdrop_path: "/bcCBq9N1EMo3daNIWJ8kYvrQm6.jpg",
      overview:
        "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote.",
      vote_average: 6.8,
      release_date: "2018-10-03",
    },
  ],
  total_pages: 1,
  total_results: 2,
}

// Helper function to handle API requests with fallback to mock data
async function fetchWithFallback(url: string, mockData: any) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      console.warn(`API request failed: ${url}`)
      return mockData
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching data: ${error}`)
    return mockData
  }
}

export async function getPopularMovies(page = 1) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  return fetchWithFallback(url, mockPopularMovies)
}

export async function getTopRatedMovies(page = 1) {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
  return fetchWithFallback(url, mockTopRatedMovies)
}

export async function getUpcomingMovies(page = 1) {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
  return fetchWithFallback(url, mockUpcomingMovies)
}

export async function getMovieDetails(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  return fetchWithFallback(url, { ...mockMovieDetails, id: Number(id) })
}

export async function getMovieCast(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  return fetchWithFallback(url, { ...mockMovieCast, id: Number(id) })
}

export async function searchMovies(query: string, page = 1) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
  return fetchWithFallback(url, mockSearchResults)
}

