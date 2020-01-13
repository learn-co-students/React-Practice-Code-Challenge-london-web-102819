import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const {sushi, viewRota} = props.appState

  const showSelectSushi = () => {
    let x = viewRota*4
    let sushiToShow = [x-4, x-3, x-2, x-1]
    if (sushi.length !== 0)
      return sushiToShow.map((i, index) => {
        return <Sushi sushi={sushi[i]} tryToBuySushi={sushiID => props.tryToBuySushi(sushiID)} key={index} purchased={isPurchased(sushi[i].id)}/>
      })
  }

  const isPurchased = sushiID => {
    if (props.sushiPurchased(sushiID)) return true
    else return false
  }

  return (
    <Fragment>
      <div className="belt">
        {showSelectSushi()}
        <MoreButton showMoreSushi={() => props.showMoreSushi()}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer