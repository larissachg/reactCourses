import { useEffect, useState } from 'react'

const URL_API = 'https://dog.ceo/api/breeds/image/random/5'

export const Practica = () => {
  const [showImage, setShowImage] = useState([])
  const obtenerImagen = async () => {
    try {
      const response = await fetch(URL_API)
      if (!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json()
      setShowImage(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerImagen()
  }, [])

  return (
    <div>
      <h1>Hola</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {showImage.message &&
          showImage.message.map((image, index) => (
            <img
              key={index}
              src={image}
              alt='image'
              style={{ width: '200px', height: '200px' }}
            />
          ))}
      </div>
    </div>
  )
}
