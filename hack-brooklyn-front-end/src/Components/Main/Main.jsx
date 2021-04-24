import React, { Component } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Background from '../Background/Background';
import NavBar from '../NavBar';

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
