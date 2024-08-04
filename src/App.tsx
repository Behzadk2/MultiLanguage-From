

import React from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  
  const onChangeLang=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const {value}=e.target;
  }
  return (
    <>
    <div className='header'>
      <select onChange={onChangeLang} >
        <option value="English">English</option>
      </select>
    </div>
   <Login></Login>
   
    </>
  )
}

export default App
