"use client"

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MonthlyCalendar = () => {
  const initialDate = new Date(2024, 0, 1);
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };

  const tileClassName = ({ date, view }:any) => {
    const day = date.getDay();

    if (view === "month") {
      if (day === 0 || day === 6 ) {
        return "red-day"; 
      } else if (date.getMonth() === selectedDate.getMonth() + 1) {
        return "blue-day"; 
      } else if (date.getMonth() === selectedDate.getMonth()) {
        return "gray-day"; 
      }
    }
    return null;
  };

  return (
    <div className="mt-2 ms-1 bg-gray-200 shadow rounded-lg MonthlyCalendar">
    <div className="calendar-container ">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        defaultActiveStartDate={initialDate}
        tileClassName={tileClassName}
      />
    </div>
  </div>
  );
};

export default MonthlyCalendar;


