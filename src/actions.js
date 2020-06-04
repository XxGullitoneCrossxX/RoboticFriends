import 
{
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_SUCCESS,
	FILTER_ROBOTS

} 
from './constants.js'

export const setSearchField = (text) =>  { 

console.log("Action Run");
return{
type: CHANGE_SEARCH_FIELD,
payload: text
}

}

export const getRobots = ( ) => (dispatch)  => { //This action can only be used using middleware such as thunk 
										//BECAUSE IT DOESN'T RETURNS ANY OBJECT DIRECTLY INFACT

	dispatch( { type:REQUEST_ROBOTS_PENDING});
	fetch('http://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS , payload: data}))
	.catch(error=>	dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}) )

}

export const filteredRobots = (robots,searchField ) => (dispatch) =>  { 

	console.log('FILTERING ROBOTS @ actions');
	console.log(robots);
	const temp=robots.filter(robots => {

				return robots.name.toLowerCase().includes(searchField.toLowerCase());
			});
	dispatch(

		{ payload : temp
			,type: FILTER_ROBOTS } 

	);

}