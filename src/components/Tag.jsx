import PropTypes from 'prop-types'

function Tag({ tags }) {
   return (
      <div className="tags">
         {tags.map((tag, index) => (
            <div key={`${tag}-${index}`} className="tag">
               {tag}
            </div>
         ))}
      </div>
   )
}

Tag.propTypes = {
   tags: PropTypes.array,
}

export default Tag
