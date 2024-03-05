import { useEffect, useState } from 'react'

const FACTS_URL = 'https://catfact.ninja/fact'
const IMAGE_PREFIX_URL = 'https://cataas.com/cat/says/'

function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(FACTS_URL)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstThreeWordsFromFact = fact.split(' ', 3).join(' ')
    setImgUrl(`${IMAGE_PREFIX_URL}${firstThreeWordsFromFact}`)
  }, [fact])

  return (
    <main>
      <section>
        <button>New fact</button>
        {fact && <p>Fact: {fact}</p>}
        {imgUrl && <img src={imgUrl} alt='Image extracted from an api with the first 3 words given from another api' />}
      </section>

    </main>
  )
}

export default App
