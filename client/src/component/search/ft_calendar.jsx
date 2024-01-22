/* use client */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DualCalendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const handleStartDateChange = (newDate) => {
    setStartDate(newDate);
    setCalendarVisible(false);
    console.log('Start', newDate);
  };

  const handleEndDateChange = (newDate) => {
    setEndDate(newDate);
    setCalendarVisible(false);
    console.log('End', newDate);
  };

  return (
    <div className="grid grid-cols-2 gap-2 justify-center text-center mt-3">
      <div className="bg-white rounded-md p-4 shadow-md" onClick={() => setCalendarVisible(!isCalendarVisible)}>
        <div>
          <span>{startDate.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
        </div>
        {isCalendarVisible && (
          <Calendar onChange={handleStartDateChange} value={startDate} locale="th-TH" />
        )}
      </div>
      <div className="bg-white rounded-md p-4 shadow-md" onClick={() => setCalendarVisible(!isCalendarVisible)}>
        <div>
          <span>{endDate.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
        </div>
        {isCalendarVisible && (
          <Calendar onChange={handleEndDateChange} value={endDate} locale="th-TH" />
        )}
      </div>
    </div>
  );
}

export default DualCalendar;
