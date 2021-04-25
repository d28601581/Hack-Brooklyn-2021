import React, {Component} from 'react';
import DashCalendar from './DashCalendar';
import NavBarCalendar2 from '../NavBar/NavBarCalendar2';
import '../TextEditor/TextEditor.css';
import TextEditor from '../TextEditor/TextEditor';



class Dashboard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            TextEditorTrigger: false,
        }

        this.onTriggerTrue = this.onTriggerTrue.bind(this);
        this.onTriggerFalse = this.onTriggerFalse.bind(this);

    }

    onTriggerTrue = () => {
        this.setState({
            TextEditorTrigger: true,
        });
    };

    onTriggerFalse = () => {
        this.setState({
            TextEditorTrigger: false,
        });
    };
    
    render(){
    
    return (
        <div>
            <NavBarCalendar2 trigger={this.state.TextEditorTrigger}/>
            <div>
                <h1>Hello</h1>
                <DashCalendar/>
                
            </div>
            
            <button onClick={this.onTriggerTrue}>Create new text editor</button>

            {this.state.TextEditorTrigger ?
                <div className='editor'>
                    <TextEditor />
                    <button onClick={this.onTriggerFalse}>Save</button>
                    <button onClick={this.onTriggerFalse}>Close</button>
                </div> : null}

        </div>
        )
    }
}

export default Dashboard;