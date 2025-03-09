import React from 'react'


export default function Infocard({title,icon,des}) {
  return (
   
    <div className=' flex flex-col justify-center items-center bg-gray-100 rounded-lg '>
        <div className='text-4xl mt-4 text-red-500' >{icon}</div>
        <p className='font-bold mt-4 text-xl'>{title}</p>
        <p className='flex-wrap m-4 font-thin text-red-600 '>{des}</p>
    </div>
  )
}


