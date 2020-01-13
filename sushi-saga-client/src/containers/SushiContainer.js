import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({changeSushiList, eatSushi, sushis}) => {
	return (
		<Fragment>
		<div className="belt">
		{
			sushis.map(s => <Sushi sushi = {s} key = {s.id} eatSushi = {eatSushi} />)
		}
		<MoreButton changeSushiList = {changeSushiList} />
		</div>
		</Fragment>
	)
}

export default SushiContainer
