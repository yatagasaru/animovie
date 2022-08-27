import {useEffect} from 'react'
import {Navigate, Route, Routes, useLocation} from 'react-router-dom'

import HomePage, {Movie} from '../pages/Home'
import MovieDetailsPage from '../pages/MovieDetails'
import MyListPage, {MovieList} from '../pages/MyList'

const Navigation = () => {
  const location = useLocation()

  useEffect(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="movie" element={<Movie />} />
        <Route path="/" element={<Navigate replace to="/movie" />} />
      </Route>
      <Route path="/mylist" element={<MyListPage />}>
        <Route path="movie" element={<MovieList />} />
        <Route
          path="/mylist"
          element={<Navigate replace to="/mylist/movie" />}
        />
      </Route>
      <Route path="/movie/:imdbID" element={<MovieDetailsPage />} />
    </Routes>
  )
}

export default Navigation
