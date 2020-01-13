import React from 'react'

const Sushi = (props) => {

  return ( 
    <div className="sushi" id={props.sushi.id}>
      <div className="plate"
          onClick={() => props.tryToBuySushi(props.sushi.id)}>
          { !props.purchased ? null : <img alt='sushi' src={props.sushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
