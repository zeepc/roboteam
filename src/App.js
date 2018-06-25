import React, { Component } from'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';


class App extends Component {
	constructor() {
		super()
		this.state ={
		 robots: robots,
	   searchfield: ''

		}
	}
	onSearchChange(e){
		console.log(e);
	}
	render(){
			return (
				<div className='tc'>
					<h1>RoboTeam</h1>
					<SearchBox  searchChange={this.onSearchChange} />
					<CardList robots={this.state.robots} />
				</div>
		);
	}
}

export default App;