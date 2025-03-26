import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}`
export const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // No puedes usar react query, swr, axios, apollo
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      //   .then((data) => setFact(data.fact))
      .then((data) => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)

        setImageUrl(new URL(`https://cataas.com/cat/says/${threeFirstWords}`))
        console.log(imageUrl)
      })
  }, [])

  // Async Await
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok')
  //     }

  //     const data = await response.json()
  //     setFact(data.fact)

  //     const threeFirstWords = fact.split(' ', 3).join(' ')

  //     setImageUrl(new URL(`https://cataas.com/cat/says/${threeFirstWords}`))
  //   } catch (error) { console.error('Error en la solicitud:', error) }
  // }

  // fetchData()

  return (
    <main>
      <h1>App de gatitos</h1>

      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${imageUrl.href}`}
            alt={`Image extracted using the first three words for ${fact}`}
          />
        )}
      </section>
    </main>
  )
}
