import React, {Component} from 'react';
import DashCalendar from './DashCalendar';
import NavBarCalendar from '../NavBar/NavBarCalendar';


class Dashboard extends Component{
    render(){
    
    return(
        <div>
            <NavBarCalendar/>
            <div>
                <h1>Hello</h1>
                <DashCalendar/>
                
            </div>
        </div>
        
    )
    }
}

export default Dashboard;