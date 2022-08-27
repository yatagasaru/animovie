/** @jsxImportSource @emotion/react */

type Props = {
  height?: string
  width?: string
}

const SkeletonText = (props: Props) => {
  const {width, height} = props

  return (
    <div
      className="skeleton"
      css={{
        marginTop: '2px',
        marginBottom: '2px',
        height: height || '24px',
        width: width || '100%',
        borderRadius: '8px'
      }}
    />
  )
}

export default SkeletonText
