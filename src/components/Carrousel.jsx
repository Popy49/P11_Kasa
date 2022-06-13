import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import PropTypes from 'prop-types'

function Carrousel({ pictures }) {
   const [item, setitem] = useState(0)

   return (
      <div className="carrousel">
         <button
            className="carrousel__button carrousel__button--left"
            onClick={() => {
               item === 0 ? setitem(pictures.length - 1) : setitem(item - 1)
            }}
         >
            <FontAwesomeIcon icon={solid('angle-left')} />
         </button>

         <img
            src={pictures[item]}
            alt="Cover location"
            className="carrousel__img"
         />

         <button
            className="carrousel__button carrousel__button--right"
            onClick={() => {
               item === pictures.length - 1 ? setitem(0) : setitem(item + 1)
            }}
         >
            <FontAwesomeIcon icon={faAngleRight} />
         </button>
      </div>
   )
}

Carrousel.propTypes = {
   pictures: PropTypes.array,
}

export default Carrousel
