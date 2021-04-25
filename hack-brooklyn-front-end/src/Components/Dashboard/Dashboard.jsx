import React, {Component} from 'react';
import DashCalendar from './DashCalendar';
import NavBarCalendar2 from '../NavBar/NavBarCalendar2';
import NavBarCalendar from '../NavBar/NavBarCalendar';
import '../TextEditor/TextEditor.css';
import TextEditor from '../TextEditor/TextEditor';



class Dashboard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            TextEditorTrigger: false,
        }

        this.onTriggerChange = this.onTriggerChange.bind(this);
    }

    onTriggerChange = () => {
        this.setState({
            TextEditorTrigger: true,
        });
    };
    
    render(){
    
    return(this.state.TextEditorTrigger) ? (
        <div>
            <NavBarCalendar2/>
            <div>
                <h1>Hello</h1>
                <DashCalendar/>
                
            </div>
            
            <button onClick={this.onTriggerChange}>Create new text editor</button>

            <div className='editor'>
                <TextEditor />
            </div>
        </div>
        
    ) 
    :
        (
            <div>
                <NavBarCalendar />
                <div>
                    <h1>Hello</h1>
                    <DashCalendar />

                </div>

                <button onClick={this.onTriggerChange}>Create new text editor</button>
            </div>

        )
    }
}

export default Dashboard;