import React from 'react'

const Sushi = (props) => {

	const { name, img_url, price, eaten} = props.sushi;
	const { eatSushi } = props;
	
	return (

		<div className="sushi">
			<div className="plate" 
				onClick={() => eaten? undefined : eatSushi(props.sushi)}>
				{ 
					eaten ?  null : <img alt = "sushi" src={img_url} width="100%" />
				}
			</div>
			<h4 className="sushi-details">
				{name} - ${price}
			</h4>
		</div>
	)
}

export default Sushi
