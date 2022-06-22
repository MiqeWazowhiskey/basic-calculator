import React from 'react'

function Dashboard(props) {
  return (
      <button onClick={props.click} className='flex bg-slate-700 border border-black h-24 w-24 items-center pl-10 hover:bg-slate-500 text-white'>
        <div> 
            {props.digit}
        </div>
      </button> 
    
  )
}

export default Dashboard