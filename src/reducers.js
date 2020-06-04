import 
{
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_SUCCESS,
	FILTER_ROBOTS

} 
from './constants.js'
const initialStateSearch = {

	searchField : '' 
}

export const searchRobots = (state=initialStateSearch,action={}) => {

	switch(action.type){

		case CHANGE_SEARCH_FIELD :
			console.log("Reducer Run With Case");

			return Object.assign({},state, {searchField : action.payload} );

		
		default:
			console.log("Reducer Run With Default Case");
		
			return state;
	} 
} 

const initialStateFetch = {

	isPending : false,
	robots : [],
	error : ""

}
export const fetchRobots = (state=initialStateFetch,action={}) =>
{
	switch(action.type){

		case REQUEST_ROBOTS_PENDING :
		    console.log('REQUEST_ROBOTS_PENDING');
			return Object.assign({},state, {isPending : true} );

		case REQUEST_ROBOTS_SUCCESS :
			console.log('REQUEST_ROBOTS_SUCCESS');
			console.log(state);
			return Object.assign({},state, {isPending : false , robots:action.payload} );

		case REQUEST_ROBOTS_FAILED :
			console.log('REQUEST_ROBOTS_FAILED');
			return Object.assign({},state,{isPending : false, error:action.payload})

		default:
		
		
			return state;
	} 

}
