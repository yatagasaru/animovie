import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState
} from 'react'

import {randomMovieKeyWord} from '../helpers/movie'

const movieKeyword = randomMovieKeyWord()

type AppContextType = {
  movieKeyword: string
  isLastPath: boolean
  setIsLastPath: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider = ({children}: {children: ReactNode}) => {
  const [isLastPath, setIsLastPath] = useState(false)

  const value = useMemo(
    () => ({isLastPath, movieKeyword, setIsLastPath}),
    [isLastPath]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useProvider = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('outside the provider')
  }

  return context
}

export {AppProvider, useProvider}
