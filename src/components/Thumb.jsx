import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Thumb({ title, cover, id }) {
   return (
      <div className="thumb">
         <Link to={`/details/${id}?id=${id}`}>
            <div className="thumb__sub">
               <h3 className="thumb__title">{title}</h3>
               <img className="thumb__img" src={cover} alt="Thumb location" />
            </div>
         </Link>
      </div>
   )
}

Thumb.propTypes = {
   title: PropTypes.string.isRequired,
   cover: PropTypes.string,
   id: PropTypes.string.isRequired,
}

export default Thumb
