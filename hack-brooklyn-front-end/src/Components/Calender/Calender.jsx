import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalender() {
  const [value, onChange] = useState(new Date());

  const task = value => {
    console.log(value);
  }

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={task}
      />
    </div>
  );
}

export default MyCalender;