/** @jsxImportSource @emotion/react */

import {useEffect, useState} from 'react'

import {Card, CardSkeleton} from '../../components/Cards'
import {CardsContainer} from '../../components/Cards/'
import useMovie from '../../hooks/useMovie'
import Header from '../../components/Header'
import {useProvider} from '../../AppProvider'
import {ShortMovieList} from '../../types'
import Scroller from '../../components/Scroller'

const Movie = () => {
  const {search, isLoading, searchData, fetchMore, pageInfo} = useMovie()
  const {movieKeyword} = useProvider()

  const [movies, setMovies] = useState<ShortMovieList[]>([])

  useEffect(() => {
    //omdbapi doesnt offer anything like 'get all movies' or 'get top n movies' that can be paginated
    //search movies based on keywords that have been randomed to populate the initial data
    search(movieKeyword)
  }, [])

  useEffect(() => {
    if (!isLoading && searchData) {
      setMovies(movies.concat(searchData))
    }
  }, [isLoading, searchData])

  return (
    <div>
      <Header showBackButton={false} title="Movie" />
      <Scroller
        hasNext={pageInfo.hasNext}
        fetchMore={() => fetchMore(movieKeyword)}
      >
        <CardsContainer>
          {isLoading
            ? Array(10)
                .fill(1)
                .map((_, index) => <CardSkeleton key={index} />)
            : movies.map(movie => <Card key={movie.imdbID} data={movie} />)}
        </CardsContainer>
      </Scroller>
    </div>
  )
}

export default Movie
