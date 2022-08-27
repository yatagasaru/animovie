/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react'
import {Link, To, useNavigate} from 'react-router-dom'

import {useProvider} from '../../AppProvider'
import Button from '../Button/Button'
import ChevronLeft from '../Icons/ChevronLeft'
import Heart from '../Icons/Heart'

export const HEADER_HEIGHT = '64'

type Props = {
  title: string
  fallBackTo?: string
  showBackButton?: boolean
  showHeartIcon?: boolean
}

const Header = (props: Props) => {
  const {title, fallBackTo, showBackButton = true, showHeartIcon = true} = props

  const navigate = useNavigate()
  const {isLastPath, setIsLastPath} = useProvider()

  const backTo = isLastPath ? -1 : fallBackTo || '/'

  return (
    <div css={baseHeaderStyle}>
      {showBackButton && (
        <Button
          onClick={() => navigate(backTo as To)}
          css={css({outline: 'none'})}
        >
          <ChevronLeft />
        </Button>
      )}
      <h3>{title}</h3>
      {showHeartIcon && (
        <div css={css({marginLeft: 'auto'})}>
          <Link to="/mylist/movie" onClick={() => setIsLastPath(true)}>
            <Heart />
          </Link>
        </div>
      )}
    </div>
  )
}

const baseHeaderStyle = css({
  height: HEADER_HEIGHT + 'px',
  display: 'flex',
  alignItems: 'center'
})

export default Header
