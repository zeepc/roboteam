import React from 'react'

const Card = ({id, name, email }) =>{
	return (
		<div className="bg-light-green dib pa3 ma2 grow bw2 shadow-5 tc">
			<img alt='robot' src={`https://robohash.org/${id}?10x10`} />
			<div>
		<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;