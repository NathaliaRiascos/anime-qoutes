
export default async function getAnime(animeName = 'clannad'){

  const res = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${animeName}`)
  const  data = await res.json()

  return data
}
 