import React from 'react'

const MoreButton = (props) => {
  const  { moreSushi } = props 
    return <button onClick={(event)=>moreSushi(event)}>
            More sushi!
          </button>
}

export default MoreButton