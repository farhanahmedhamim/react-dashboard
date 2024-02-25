import React, { useState } from 'react'
import '../components/styles/customCalendar.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {

  const [date, setDate] = useState(new Date());



  return (
    <div className='customCalendar'>
      <div className="calendarHeading">
        <select>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may" selected>May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
        <select>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
      </div>
      <div className="calendarBody">
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} width={"100%"} />
        </div>
      </div>
    </div>
  )
}

export default CustomCalendar


