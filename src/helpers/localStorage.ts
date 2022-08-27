export const keys = ['MovieList', 'AniList'] as const
export type Key = typeof keys[number]

const PREFIX = 'animovie-'

const setItem = (key: Key, value: string) =>
  localStorage.setItem(PREFIX + key, value)

const getItem = (key: Key): string => localStorage.getItem(PREFIX + key)!

const clear = () => localStorage.clear()

export {setItem, getItem, clear}
