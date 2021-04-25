import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './DashCalendar.css';

function DashCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calen">
      <Calendar
        onChange={onChange}
        value={value}
        
      />

      
    </div>
  );
}
export default DashCalendar;