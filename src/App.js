import { useState } from 'react';
import Calendar from 'react-calendar';
import Button from './Button/Button';
import './App.css';
import './Style/main.css'



function App() {


  const [date, setDate] = useState(new Date());
  const clearDate = () => {
    setDate(new Date());
  };  return (
    <div className='app'>
    <h1 className='text-center'>Calendar</h1>
    <div className='calendar-container'>
      <Calendar className='table' onChange={setDate} value={date} />
    </div>
    <p className='text-center' >
      <span className='bold'>Selected Date:</span>{' '}
      <input className='input' value={date.toDateString()} readOnly />
      <p className='text-center' >
      <button className='button' onClick={clearDate}>Clear Date</button>
      </p>
    </p>
  </div>

);
}

export default App;
