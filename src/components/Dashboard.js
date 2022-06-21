import React from 'react'

function Dashboard(props) {
  return (
    <div>
        <div className='flex border border-black h-24 w-24 items-center pl-10'>
             <button className=''>{props.digit}</button> 
        </div>
    </div>
  )
}

export default Dashboard