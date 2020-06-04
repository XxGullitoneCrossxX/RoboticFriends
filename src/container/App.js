import React,{Component} from 'react';
import {CardList} from '../component/CardList.js';
import {connect} from 'react-redux';
//import {robots} from './robots'
import SearchBox from '../component/SearchBox.js';
import './App.css'
import {Scroll} from '../component/Scroll.js';
import ErrorBoundary from "../component/ErrorBoundary.js"
import {setSearchField,getRobots} from "../actions.js"
import {searchRobots,fetchRobots} from "../reducers.js"


const mapStateToProps = (state) => {
	console.log("Mapping State To Props");
	return {
		searchField: state.searchRobots.searchField,
		robots: state.fetchRobots.robots,
		isPending: state.fetchRobots.isPending,
		error: state.fetchRobots.error,
	}
}

const mapDispatchToProps = (dispatch) => {
	console.log("Mapping Dispatch To Props");
	return {
	onSearchChange: (event) => dispatch(setSearchField(event.target.value)) ,
	onRequestRobots: () => dispatch(getRobots())

	}
}


class App extends Component {

	constructor (props) {

		super(props)
		console.log("Constructor Has been called!")
		

	}


	componentDidMount() {
		console.log("COMPONENT DID MOUNT")
		this.props.onRequestRobots();
		
		/*
		console.log(this.props);
		fetch('http://jsonplaceholder.typicode.com/users')
		.then( response => 
			response.json()
			)
		.then( users =>
			this.setState({robots : users})
			)
			*/
	}

	render(){
		
		//const {robots} = this.state;
		const {searchField, onSearchChange,robots,isPending,error} = this.props;
		console.log(robots);
		console.log(searchField);
	
		const filteredRobo = robots.filter(
			(robots) => {

				return robots.name.toLowerCase().includes(searchField.toLowerCase());
			})
		
		console.log(filteredRobo);
		console.log(this.props);


		return isPending ?

			<h1> LOADING </h1> :

		 (
		 	
			<div className='tc'>
			<h1 className='f1'>Robofriends</h1>
			<SearchBox onSearchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundary>	
				<CardList robots={filteredRobo} />
				</ErrorBoundary>
			</Scroll>

			</div>
			);

	}

}

export default connect(mapStateToProps,mapDispatchToProps)(App);