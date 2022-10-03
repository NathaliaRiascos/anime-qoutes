import { useEffect, useState, useContext } from 'react'
import getAnime from 'services/getAnime'
import  AnimeContext  from 'context/AnimeContext'

export default function useAnime () {
  const [anime, setAnime] = useState('')
  const { saveQuotes } = useContext(AnimeContext)

  useEffect(() => {
    if (!anime) return
    getAnime(anime).then(data => {
      saveQuotes(data)
    })
        
  }, [anime])

  return { setAnime }
}
