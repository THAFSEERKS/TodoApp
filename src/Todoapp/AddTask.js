import React from 'react'

const AddTask = () => {
  return (
    <>
        <div className='input-container'>
            <input className="input"  placeholder='Add a new Task' type='text' 
            onChange={(e)=>{console.log(e.target.value)}}>
            </input>
            <button className='add-btn' > ADD</button>
        </div>
    </>
  )
}

export default AddTask