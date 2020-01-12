import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
 

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.slice(props.n, props.size).map(sushi => (
            <Sushi eatenDishes={props.eatenDishes} eatDish={props.eatDish} sushi={sushi}/>
          ))
          
        }
        <MoreButton  moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer