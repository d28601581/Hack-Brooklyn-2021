import React, {Component} from 'react';
import DashCalendar from './DashCalendar';
import NavBarCalendar2 from '../NavBar/NavBarCalendar2';


class Dashboard extends Component{
    render(){
    
    return(
        <div>
            <NavBarCalendar2/>
            <div>
                <h1>Hello</h1>
                <DashCalendar/>
                
            </div>
        </div>
        
    )
    }
}

export default Dashboard;