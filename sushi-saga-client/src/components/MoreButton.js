import React from 'react'

const MoreButton = (props) => {
    return <button onClick={e => props.showMoreSushi(e)}>
            More sushi!
          </button>
}

export default MoreButton