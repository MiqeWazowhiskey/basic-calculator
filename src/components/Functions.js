import React from 'react'

function Functions(props) {
  return (
    <button className='flex border border-black h-24 w-24 font-bold items-center pl-10 hover:bg-orange-300'>
      <div>
          {props.func}
      </div>
    </button>
  )
}

export default Functions