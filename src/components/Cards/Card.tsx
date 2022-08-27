/** @jsxImportSource @emotion/react */

import {Link} from 'react-router-dom'
import {useProvider} from '../../AppProvider'

import {ShortMovieList} from '../../types'
import ClampedText from '../ClampedText/ClampedText'

const Card = ({data}: {data: ShortMovieList}) => {
  const {setIsLastPath} = useProvider()

  return (
    <Link to={`/movie/${data.imdbID}`} onClick={() => setIsLastPath(true)}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '170px',
          height: '324px',
          margin: '16px'
        }}
      >
        <img
          alt={data.Title}
          src={data.Poster}
          css={{
            width: '170px',
            height: '250px',
            borderRadius: '20px',
            objectFit: 'cover',
            backgroundColor: '#CCC'
          }}
        />
        <ClampedText noOfLines={2} marginTop="auto">
          {data.Title}
        </ClampedText>
        <div
          css={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            color: 'palevioletred'
          }}
        >
          <small>{data.Type.toUpperCase()}</small>
          <small>{data.Year}</small>
        </div>
      </div>
    </Link>
  )
}

export default Card
