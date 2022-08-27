/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react'
import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useProvider} from '../../AppProvider'
import Button from '../../components/Button/Button'
import Header from '../../components/Header'
import ChevronRight from '../../components/Icons/ChevronRight'

import Layout from '../../components/Layout'
import {SkeletonBox, SkeletonText} from '../../components/Skeleton'
import useMovie from '../../hooks/useMovie'
import useWindowSize from '../../hooks/useWindowSize'

const MovieDetailsPage = () => {
  const {imdbID} = useParams()
  const {isMobile} = useWindowSize()
  const {details, detailsData, addToMyList, removeFromMyList, myList} =
    useMovie()
  const {setIsLastPath} = useProvider()

  const [isInList, setIsInList] = useState(false)

  useEffect(() => {
    if (imdbID) {
      details(imdbID)
    }
  }, [])

  useEffect(() => {
    setIsInList(myList.some(movie => movie.imdbID === imdbID))
  }, [imdbID, myList])

  const handleMyListClick = () => {
    if (detailsData && imdbID) {
      if (isInList) {
        removeFromMyList(imdbID)
      } else {
        addToMyList({
          Title: detailsData.Title,
          Year: detailsData.Year,
          Type: detailsData.Type,
          imdbID: detailsData.imdbID,
          Poster: detailsData.Poster
        })
      }

      setIsInList(!isInList)
    }
  }

  return (
    <Layout>
      <div
        css={[
          bgPosterContainer,
          {
            backgroundImage: `url(${detailsData?.Poster})`,
            marginLeft: isMobile ? '-1rem' : '0',
            width: isMobile ? 'calc(100% + 2rem)' : '100%'
          }
        ]}
      >
        <div css={{position: 'absolute'}}>
          <Header title="" showHeartIcon={false} />
        </div>
        <div css={posterBackdrop}>
          <div
            css={[
              posterContainer,
              {width: isMobile ? 'calc(100% - 2rem)' : '100%'}
            ]}
          >
            <img
              alt={detailsData?.Title}
              src={detailsData?.Poster}
              css={poster}
            />
            <div
              css={{
                marginLeft: '1rem',
                marginTop: 'auto',
                fontWeight: 'bold'
              }}
            >
              <h3>{detailsData?.Title}</h3>
              <p css={{color: 'palevioletred', marginTop: '16px'}}>
                {detailsData?.Type.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div css={{fontWeight: 'bold', padding: '1rem'}}>
          <Button
            onClick={handleMyListClick}
            css={css({width: '100%', marginBottom: '16px'})}
          >
            {isInList ? 'Remove From' : 'Add To'} My List
          </Button>
          <Link to="/mylist/movie" onClick={() => setIsLastPath(true)}>
            <div css={myMovieListButton}>
              <p>See my movie list</p>
              <ChevronRight />
            </div>
          </Link>
          <div
            css={{
              marginTop: '20px'
            }}
          >
            {detailsData ? (
              <>
                <p>
                  {detailsData.Year} • {detailsData.Genre.split(',').join(' |')}
                </p>
                <p>{detailsData.Runtime}</p>
              </>
            ) : (
              <>
                <SkeletonText width="30%" />
                <SkeletonText width="15%" />
              </>
            )}
          </div>
        </div>
        <div
          css={[
            ratingsContainer,
            {justifyContent: isMobile ? 'space-between' : 'space-around'}
          ]}
        >
          <div>
            {detailsData ? (
              <h3 css={ratingScore}>{detailsData.Metascore}</h3>
            ) : (
              <SkeletonBox height="40px" width="82px" />
            )}
            <p>Metascore</p>
          </div>
          <div>
            {detailsData ? (
              <h3 css={ratingScore}>{detailsData?.imdbRating}</h3>
            ) : (
              <SkeletonBox height="40px" width="82px" />
            )}
            <p>IMDB Rating</p>
          </div>
        </div>
        <h3>Plot</h3>
        {detailsData ? (
          <p>{detailsData.Plot}</p>
        ) : (
          <>
            <SkeletonText />
            <SkeletonText width="50%" />
            <SkeletonText width="30%" />
          </>
        )}
      </div>
    </Layout>
  )
}

const bgPosterContainer = css({
  color: '#FFF',
  position: 'relative',
  zIndex: '1',
  marginTop: '-1rem',
  height: '350px',
  backgroundSize: 'cover'
})

const posterBackdrop = css({
  display: 'flex',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0, .7)'
})

const posterContainer = css({
  display: 'flex',
  marginTop: 'auto',
  marginLeft: '.5rem',
  marginBottom: '.5rem',
  flexShrink: 0
})

const poster = css({
  flexShrink: 0,
  backgroundColor: '#CCC',
  width: '35%',
  maxWidth: '170px',
  height: '250px',
  borderRadius: '20px',
  objectFit: 'cover'
})

const myMovieListButton = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'palevioletred',
  fontWeight: 'normal'
})

const ratingsContainer = css({
  marginTop: '20px',
  marginBottom: '20px',
  display: 'flex',
  color: '#AAA',
  fontWeight: 'bold'
})

const ratingScore = css({
  fontSize: '40px',
  color: 'green',
  lineHeight: 1
})

export default MovieDetailsPage
