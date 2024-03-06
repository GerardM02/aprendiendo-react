import { useEffect, useState } from 'react'
import { getNewFact } from './services/facts'
const IMAGE_PREFIX_URL = 'https://cataas.com/cat/says/'

function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    getNewFact().then(setFact)
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstThreeWordsFromFact = fact.split(' ', 3).join(' ')
    setImgUrl(`${IMAGE_PREFIX_URL}${firstThreeWordsFromFact}`)
  }, [fact])

  const handleClick = async () => {
    const newFact = await getNewFact()
    setFact(newFact)
  }

  return (
    <main>
      <section>
        <button onClick={handleClick}>New fact</button>
        {fact && <p>Fact: {fact}</p>}
        {imgUrl && <img src={imgUrl} alt='Image extracted from an api with the first 3 words given from another api' />}
      </section>

    </main>
  )
}

export default App
