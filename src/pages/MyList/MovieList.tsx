/** @jsxImportSource @emotion/react */

import {Card} from '../../components/Cards'
import {CardsContainer} from '../../components/Cards/'
import Header from '../../components/Header'
import useMovie from '../../hooks/useMovie'

const MovieList = () => {
  const {myList} = useMovie()

  return (
    <div>
      <Header title="My Movie List" fallBackTo="/movie" showHeartIcon={false} />
      {!myList.length && (
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            color: '#AAA'
          }}
        >
          <em>No favorite movies yet</em>
        </div>
      )}
      <CardsContainer>
        {myList.map(movie => (
          <Card key={movie.imdbID} data={movie} />
        ))}
      </CardsContainer>
    </div>
  )
}

export default MovieList
