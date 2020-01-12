import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const {sushi, eatingSushi, eatenSushi,moreSushi} = props 

  return (
    <Fragment>
      <div className="belt">
        { 
          sushi.map(sushi => 
            <Sushi sushi={sushi} eatingSushi={()=>eatingSushi(sushi)} eatenSushi={eatenSushi}/>
          )
        }
        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer