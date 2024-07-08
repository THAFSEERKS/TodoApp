import React, { useState } from 'react'

const AddTask = ({addTask}) => {
  const [value, setvalue] = useState("");

  const addItem = () =>{
    addTask(value);
    setvalue("");
  }
  return (
    <>
        <div className='input-container'>
            <input className="input"  placeholder='Add a new Task' type='text' 
            value={value}
            onChange={(e)=>{setvalue(e.target.value)}}>
            </input>
            <button onClick={addItem} className='add-btn' > ADD</button>
        </div>
    </>
  )
}

export default AddTask