import React, {Component} from 'react';
import {Carousel, Container} from 'react-bootstrap';
import Background from '../Background/Background';
import Navbar from '../NavBar';

class Main extends Component{
    render(){
        return(
            <div>
                <Navbar/>
            
                <Background/>
            </div>
        )
    }

}
export default Main;