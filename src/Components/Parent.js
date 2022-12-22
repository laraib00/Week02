import React from 'react'
import Child from './Child'
export default function () {
    const text="Here We are passing data to child Component by using props"
  return (
    <div>
    <Child text={text}/>   
    </div>
  )
}
