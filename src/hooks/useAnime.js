import { useEffect, useState, useContext } from 'react'
import getAnime from 'services/getAnime'
import  AnimeContext  from 'context/AnimeContext'

export const useAnime = () => {
  const [anime, setAnime] = useState('clannad')
  const { saveQuotes } = useContext(AnimeContext)

  useEffect(() => {
    if (!anime) return
    getAnime(anime).then(data => {
      saveQuotes(data)
    })
        
  }, [anime])

  return { setAnime }
}
