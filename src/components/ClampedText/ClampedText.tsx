/** @jsxImportSource @emotion/react */

import {ReactNode} from 'react'
import {css} from '@emotion/react'

type Props = {
  children: ReactNode
  noOfLines: number
  marginTop: string | number
}

const ClampedText = (props: Props) => {
  const {children, noOfLines, marginTop} = props

  return (
    <p
      css={css`
        -webkit-line-clamp: ${noOfLines};
        /* autoprefixer: ignore next */
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        word-break: break-word;
        margin-top: ${marginTop};
      `}
    >
      {children}
    </p>
  )
}

export default ClampedText
