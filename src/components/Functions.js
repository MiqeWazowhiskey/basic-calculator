import React from 'react'

function Functions(props) {
  return (
    <div className='flex border border-black h-24 w-24 font-bold items-center pl-10 '>
        <button>{props.func}</button>
    </div>
  )
}

export default Functions