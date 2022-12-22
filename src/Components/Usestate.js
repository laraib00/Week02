import React, { useState, useEffect } from 'react'

export default function Usestate() {
    const [resourceType, setResourceType]=useState('Posts')
    console.log('Render')
    useEffect(()=>{
        console.log('Resource Type Change')
    },[resourceType])


    // Using Effects for listening to window width change
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
   const handleResize=()=>{
    setWindowWidth(window.innerWidth)
   }
   useEffect(()=>{
    window.addEventListener('resize',handleResize)
   })
  return (
    <>
    <div>
        <button onClick={()=>setResourceType("Posts")}>Posts</button>
        <button onClick={()=>setResourceType("Users")}>Users</button>
        <button onClick={()=>setResourceType("Comments")}>Comments</button>
    </div>
    <h1>{resourceType}</h1>


{/* ---------------Another UseEffect Hook---------- */}
    <div>Window Width: {windowWidth}</div>
     
    </>

  )
}
