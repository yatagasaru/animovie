/** @jsxImportSource @emotion/react */

import {ReactNode} from 'react'
import {css} from '@emotion/react'

import useWindowSize from '../../hooks/useWindowSize'

type Props = {
  children: ReactNode[] | ReactNode
}

const CardsContainer = (props: Props) => {
  const {children} = props

  const {isMobile} = useWindowSize()

  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        marginInline: 'auto',
        flexWrap: 'wrap'
      })}
    >
      {children}
    </div>
  )
}

export default CardsContainer
