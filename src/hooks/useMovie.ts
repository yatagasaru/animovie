import axios from 'axios'
import {useEffect, useState} from 'react'
import {getItem, setItem} from '../helpers/localStorage'
import {MovieType, ShortMovieList} from '../types'

const API_URL = 'https://www.omdbapi.com/?apikey=bcc9c7ec'

type ResponseTrueFalse = 'True' | 'False'

type SearchResponse = {
  Search?: ShortMovieList[]
  totalResults?: string
  Response: ResponseTrueFalse
  Error?: string
}

type GetResponse = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {Source: string; Value: string}[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: MovieType
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: ResponseTrueFalse
  Error?: string
}

type PageInfo = {
  hasNext: boolean
  totalItem: number
  currentPage: number
  nextPage: number
}

const useMovie = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isFetchMoreLoading, setIsFetchMoreLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [searchData, setSearchData] = useState<ShortMovieList[]>([])
  const [detailsData, setDetailsData] = useState<GetResponse | undefined>()
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    hasNext: false,
    totalItem: 0,
    currentPage: 0,
    nextPage: 0
  })
  const [myList, setMyList] = useState<ShortMovieList[]>([])

  useEffect(() => {
    try {
      const list = JSON.parse(getItem('MovieList'))

      if (!Array.isArray(list)) {
        setItem('MovieList', JSON.stringify([]))
      } else {
        setMyList(list)
      }
    } catch (err) {
      setItem('MovieList', JSON.stringify([]))
    }
  }, [])
  const search = async (title: string) => {
    if (isLoading) return

    try {
      setIsLoading(true)

      const {data} = await axios.get<SearchResponse>(
        `${API_URL}&s=${title}&page=1`
      )

      if (data.Response === 'False') {
        throw data.Error || ''
      }

      if (data.Search) {
        setSearchData(data.Search)

        if (data.totalResults) {
          handlePageInfo(data)
        }
      }
    } catch (err: any) {
      console.error(err)
      setIsError(true)
      setSearchData([])
    } finally {
      setIsLoading(false)
    }
  }

  const fetchMore = async (title: string) => {
    if (
      isLoading &&
      isFetchMoreLoading &&
      !searchData.length &&
      !pageInfo.hasNext
    )
      return

    try {
      setIsFetchMoreLoading(true)

      const {data} = await axios.get<SearchResponse>(
        `${API_URL}&s=${title}&page=${pageInfo.nextPage}`
      )

      if (data.Search) {
        setSearchData(data.Search)

        if (data.totalResults) {
          handlePageInfo(data)
        }
      }
    } catch (err: any) {
      console.error(err)
      setIsError(true)
    } finally {
      setIsFetchMoreLoading(false)
    }
  }

  const handlePageInfo = (data: SearchResponse) => {
    if (!data.totalResults) return

    const totalPage = Math.floor(+data.totalResults / 10)
    if (totalPage > pageInfo.currentPage) {
      setPageInfo({
        totalItem: +data.totalResults,
        hasNext: true,
        currentPage: pageInfo.currentPage + 1,
        nextPage: pageInfo.currentPage + 2
      })
    } else {
      setPageInfo({...pageInfo, hasNext: false})
    }
  }

  const details = async (imdbID: string) => {
    try {
      setIsLoading(true)

      const {data} = await axios.get<GetResponse>(`${API_URL}&i=${imdbID}`)

      if (data.Response === 'False') {
        throw data.Error || ''
      } else {
        setDetailsData(data)
      }
    } catch (err) {
      console.error(err)
      setIsError(true)
      setDetailsData(undefined)
    } finally {
      setIsLoading(false)
    }
  }

  const addToMyList = (movie: ShortMovieList) => {
    const existingList = JSON.parse(getItem('MovieList'))

    setItem('MovieList', JSON.stringify(existingList.concat(movie)))
  }

  const removeFromMyList = (imdbID: string) => {
    const existingList = JSON.parse(getItem('MovieList'))
    const newList = existingList.filter(
      (movie: ShortMovieList) => movie.imdbID !== imdbID
    )

    setItem('MovieList', JSON.stringify(newList))
  }

  return {
    search,
    details,
    addToMyList,
    removeFromMyList,
    fetchMore,
    isFetchMoreLoading,
    myList,
    searchData,
    detailsData,
    isLoading,
    isError,
    pageInfo
  }
}

export default useMovie
