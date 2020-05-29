

import React from 'react';

const Card = ({id,name,email}) => {
	
	return (
			
		<div className ='bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}/200x200`} width="200px" height="200px"/>
			<div>
				<h2>{id}</h2>
				<p>{name}</p>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;

