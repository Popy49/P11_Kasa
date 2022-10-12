import Thumb from './Thumb'
import { useState, useEffect } from 'react'

function Gallery() {
   const [data, setData] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {
      fetch('./P11_Kasa/locationList.json')
         .then(function (res) {
            console.log(res)
            return res.json()
         })
         .then(function (data) {
            console.log(data)
            setData(data)
            setIsLoaded(true)
         })
         .catch(function (err) {
            setError(err)
            setIsLoaded(true)
         })
   }, [])

   if (error) {
      return <div>Erreur : {error.message}</div>
   } else if (!isLoaded) {
      return <div>Chargement...</div>
   } else {
      return (
         <div>
            <div className="gallery">
               {data.map((location) => (
                  <Thumb
                     key={location.id}
                     id={location.id}
                     title={location.title}
                     cover={location.cover}
                  />
               ))}
            </div>
         </div>
      )
   }
}

export default Gallery
