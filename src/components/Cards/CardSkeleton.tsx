/** @jsxImportSource @emotion/react */

import {SkeletonText} from '../Skeleton'

const CardSkeleton = () => {
  return (
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
        className="skeleton"
        css={{
          width: '170px',
          height: '250px',
          borderRadius: '20px'
        }}
      />
      <div
        css={{
          marginTop: 'auto'
        }}
      >
        <SkeletonText />
      </div>
      <div
        css={{
          marginTop: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '20px'
        }}
      >
        <SkeletonText height="100%" width="30%" />
        <SkeletonText height="100%" width="30%" />
      </div>
    </div>
  )
}

export default CardSkeleton
