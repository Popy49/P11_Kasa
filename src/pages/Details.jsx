import Carrousel from '../components/Carrousel'
import Tag from '../components/Tag'
import Dropdown from '../components/Dropdown'
import Star from '../components/Star'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Details() {
   const [searchParams, setSearchParams] = useSearchParams()
   const id = searchParams.get('id')
   let data = []

   const [datas, setDatas] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {
      fetch('../../P11_Kasa/locationList.json')
         .then(function (res) {
            return res.json()
         })
         .then(function (datas) {
            setDatas(datas)
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
   } else if (datas) {
      datas.map((location) => {
         if (location.id === id) {
            data = location
         }
      })

      let Rating = () => {
         return (
            <ul className="star">
               {Array.from(Array(5), (e, index) => {
                  if (index < parseInt(data.rating)) {
                     return (
                        <div key={`${data.id}-${index}`} className="star--yes">
                           <Star />
                        </div>
                     )
                  } else {
                     return (
                        <div key={`${data.id}-${index}`} className="star--no">
                           <Star />
                        </div>
                     )
                  }
               })}
            </ul>
         )
      }

      return (
         <main>
            <Carrousel key={data.id} pictures={data.pictures} />
            <div className="Card">
               <div className="Card__title">
                  <h1>{data.title}</h1>
                  <p>{data.location}</p>
                  <Tag tags={data.tags} />
               </div>

               <div className="flexRowB">
                  <div className="flexRow">
                     <p className="wrap">{data.host.name}</p>
                     <img
                        src={data.host.picture}
                        alt="Host"
                        className="picture"
                     />
                  </div>
                  <Rating />
               </div>
            </div>
            <div className="flex">
               <Dropdown
                  key={data.id + 2}
                  datas={data.equipments}
                  title="Equipements"
               />
               <Dropdown
                  key={data.id + 3}
                  datas={data.description}
                  title="Description"
               />
            </div>
         </main>
      )
   }
}

export default Details
