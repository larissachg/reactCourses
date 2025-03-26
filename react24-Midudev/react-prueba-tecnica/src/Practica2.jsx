import { useEffect, useState } from 'react'

const API_URL = 'https://randomuser.me/api/'

export const Practica2 = () => {
  const [post, setPost] = useState()

  const obtenerPost = async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json()
      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerPost()
  }, [])

  return (
    <div>
      {post && (
        <div>
          <img src={post.results[0].picture.large} alt='image' />
        </div>
      )}
    </div>
  )
}
