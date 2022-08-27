const randomMovieKeyWord = () => {
  const keyword = [
    'Love',
    'One',
    'Big',
    'Little',
    'Black',
    'You',
    'Death',
    'Star',
    'Wild'
  ]

  return keyword[(keyword.length * Math.random()) | 0]
}

export {randomMovieKeyWord}
