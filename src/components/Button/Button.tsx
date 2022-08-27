/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react'
import {SerializedStyles} from '@emotion/serialize'
import {ButtonHTMLAttributes, ReactNode} from 'react'

type Props = {
  children: ReactNode
  css?: SerializedStyles
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: Props) => {
  const {children, css: cssProps, ...buttonProps} = props

  return (
    <button {...buttonProps} css={[baseButtonStyle, cssProps]}>
      {children}
    </button>
  )
}

const baseButtonStyle = css({
  color: 'inherit',
  height: 'auto',
  padding: '1rem',
  margin: 0,
  fontSize: '16px',
  background: 'transparent',
  borderStyle: 'none',
  outline: '1px solid black',
  outlineOffset: 2,
  borderRadius: '15px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  lineHeight: '1.2'
})

export default Button
