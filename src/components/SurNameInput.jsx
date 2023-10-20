import React from 'react'

const SurNameInput = ({surName, surNameChange}) => {
  return (
    <div>
      <input type="text" value={surName} onChange={surNameChange}/>
      
    </div>
  )
}

export default SurNameInput
