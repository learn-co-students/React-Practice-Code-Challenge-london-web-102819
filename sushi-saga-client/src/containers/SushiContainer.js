import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import TopoffForm from './TopoffForm'

const SushiContainer = (props) => {
  const {sushi, eatingSushi, eatenSushi,moreSushi, showTopOff, topOff, onTopoff} = props 

  return (
    <Fragment>
      <div className="belt">
        { 
          sushi.map(sushi => 
            <Sushi sushi={sushi} eatingSushi={()=>eatingSushi(sushi)} eatenSushi={eatenSushi}/>
          )
        }
        <MoreButton moreSushi={moreSushi}/>
        <TopoffForm showTopOff={showTopOff} topOff={topOff} onTopoff={onTopoff}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer