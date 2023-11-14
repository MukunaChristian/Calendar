import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './App.css'
import './Style/main.css'

function App() {
  const [date, setDate] = useState()
  const [dateArray, setDateArray] = useState([])

  const clearDate = () => {
    setDateArray([])
  }

  const handleDateChange = (selectedDate) => {
    const newString = selectedDate.toDateString()
    setDate(newString)

    const newArray = [...dateArray] 
    newArray.push(newString)
    setDateArray(newArray)
  }

  const clearIndividualDate = (index) => {
    const newArray = [...dateArray]
    newArray.splice(index, 1)
    setDateArray(newArray)
  }

  return (
    
    <div className="flex-container">
      <div className="app">
        <h1 className="text-center">Calendar</h1>
        <div className="calendar-container">
          <Calendar
            className="table"
            onChange={handleDateChange}
            value={date}
          />
        </div>
      </div>

      <div className="box">
        <div className="b">
          <button className="button" onClick={clearDate}>
            Clear All Dates
          </button>
        </div>

        <div className='date'>
          {dateArray.map((date, index) => (
            <div key={index}>
              Selected Date: {date}
              <button className="button1" onClick={() => clearIndividualDate(index)}>
                Clear Date
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
