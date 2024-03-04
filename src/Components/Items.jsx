import React, {useState} from 'react'
import {BsTrash} from "react-icons/bs"
function Items(props) {
    const [done, setDone] = useState(false);
  return (
    <div onClick={() => setDone(!done)} className='select-none cursor-pointer w-full border-b p-3 flex justify-between'>
       <div>
        <span className=' pr-2 text-xs text-slate-400'>
            {props.time}
        </span>
        <span className={`${done === true ? 'line-through' : ''} text-xl`}>
            {props.item}
        </span>
      </div>
      <div onClick={() => props.removeHandler(props.id)}> 
        <BsTrash  className='cursor-pointer text-[#e74c3c]' />
      </div>
    </div>
  )
}

export default Items
