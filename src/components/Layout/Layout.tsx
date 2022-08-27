/** @jsxImportSource @emotion/react */

import {ReactNode} from 'react'
import {css} from '@emotion/react'

type Props = {
  children: ReactNode
  minHeight?: string
}

const Layout = (props: Props) => {
  const {children, minHeight} = props

  return (
    <main
      css={{
        minHeight: minHeight || '100vh'
      }}
    >
      <div css={containerCss}>{children}</div>
    </main>
  )
}

const containerCss = css({
  maxWidth: '1024px',
  padding: '1rem',
  backgroundColor: '#FFF',
  marginInline: 'auto'
})

export default Layout
