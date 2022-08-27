/** @jsxImportSource @emotion/react */

import {CSSInterpolation} from '@emotion/serialize'

type Props = CSSInterpolation

const SkeletonBox = (props: Props) => {
  const cssProps = props

  return <div className="skeleton" css={[cssProps, {borderRadius: '8px'}]} />
}

export default SkeletonBox
