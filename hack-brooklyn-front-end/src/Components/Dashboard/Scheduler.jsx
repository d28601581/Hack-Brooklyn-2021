import React, {Component} from 'react';
import {Inject, SchedulerComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';

class Scheduler extends Component{
    render(){
        return(
            <SchedulerComponent>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </SchedulerComponent>
        )
    }
}
export default Scheduler;