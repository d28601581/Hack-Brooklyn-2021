import React, { Component } from 'react';
import Background from '../Background/Background';
import NavBar from '../Navbar';
import MyCalender from 'MyCalender';

class CalenderPage extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <MyCalender />

            </div>
        )
    }

}
export default CalenderPage;