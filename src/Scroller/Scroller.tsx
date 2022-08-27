import {ReactNode, useEffect} from 'react'

type Props = {
  children: ReactNode | ReactNode[]
  hasNext: boolean
  fetchMore: () => void
}

const Scroller = (props: Props) => {
  const {children, hasNext, fetchMore} = props

  const onScroll = () => {
    if (
      document.body.offsetHeight - window.innerHeight === window.scrollY &&
      hasNext
    ) {
      fetchMore()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [hasNext, fetchMore])

  return <div className="scroller">{children}</div>
}

export default Scroller
