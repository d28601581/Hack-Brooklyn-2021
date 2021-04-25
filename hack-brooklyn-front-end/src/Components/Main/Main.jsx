import React, { Component } from 'react';
import Background from '../Background/Background';
import NavBar from '../NavBar/NavBar';

class Main extends Component {
	render() {
		return (
			<div>
				<NavBar/>

				<Background />
			</div>
		);
	}
}
export default Main;
