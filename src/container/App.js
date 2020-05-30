import React,{Component} from 'react';
import {CardList} from '../component/CardList.js';
//import {robots} from './robots'
import SearchBox from '../component/SearchBox.js';
import './App.css'
import {Scroll} from '../component/Scroll.js';
import ErrorBoundary from "../component/ErrorBoundary.js"


class App extends Component {


	constructor () {

		super()
		this.state = {
			robots: [],
			searchfield : ''
		}
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
		.then( response => 
			response.json()
			)
		.then( users =>
			this.setState({robots : users})
			)
	}

	onSearchChange = (event) => {

		this.setState({searchfield: event.target.value});
	}

	render(){

		const {robots,searchfield} = this.state;
		const filteredRobots = robots.filter(
			(robots) => {

				return robots.name.toLowerCase().includes(searchfield.toLowerCase());
			}

			);
		console.log(filteredRobots);

		return !robots.length ?

			<h1> LOADING </h1> :

		 (
			<div className='tc'>
			<h1 className='f1'>Robofriends</h1>
			<SearchBox onSearchChange={this.onSearchChange} />
			<Scroll>
				<ErrorBoundary>	
				<CardList robots={filteredRobots} />
				</ErrorBoundary>
			</Scroll>

			</div>
			);

	}

}

export default App;