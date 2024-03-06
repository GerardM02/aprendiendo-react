const FACTS_URL = 'https://catfact.ninja/fact'

export const getNewFact = async () => {
  const res = await fetch(FACTS_URL)
  const data = await res.json()
  return data.fact
}
