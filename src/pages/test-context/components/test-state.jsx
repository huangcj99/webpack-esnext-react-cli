import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from 'store'

export default function TestState () {
  let context = useContext(StoreContext)
  // let [count, setCount] = useState(0);
  
  // useEffect(() => {
  //   console.log(context)
  //   setTimeout(() => {
  //     context.states.b = '改变b'
  //     console.log(context)
  //   }, 2000)
  // })

  return (
    <div>
      {/* TestState: { count } */}
      <p>{ context.a }</p>
    </div>
  )
}