import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	console.log(robots);
	return(
	<div>
	{
	robots.map( (value,i) => { 
  			return (
  			<Card
  			key={i} 
  			id={robots[i].id} 
  			name={robots[i].name} 
  			email={robots[i].email} 
  			/>
			);
  		})
	}
	</div>
	);
}



export {CardList};	