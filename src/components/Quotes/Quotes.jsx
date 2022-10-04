import { useRef, useContext, useEffect } from "react"
import { Quote } from "components"
import AnimeContext from "context/AnimeContext"
import { useAnime } from "hooks"

function Quotes() {
  const { setAnime } = useAnime()

  useEffect(() => {
    setAnime()
  }, [])

  const slider = useRef(null)
  const { quotes } = useContext(AnimeContext)

  const scrollTo = num => {
    if (slider.current) slider.current.scrollLeft += num
  }
  return (
    <div className='Container__quote'>
      {quotes.length ?
        <><button className='Btn__flecha' onClick={() => scrollTo(-460)}>
          <i className='fas fa-chevron-left'></i>
        </button><div ref={slider} className='Cards'>
          {quotes.map((quote, index) => <Quote key={index} data={quote} />)}
        </div><button className='Btn__flecha' onClick={() => scrollTo(460)}>
          <i className='fas fa-chevron-right'></i>
        </button>
        </>
      : (
        <p>Oops el anime no fue encontrado</p>
      )}
    </div>
  )
}

export default Quotes
