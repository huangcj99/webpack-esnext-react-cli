import React, { useState, useEffect } from 'react';

export default function TestState () {
  let [count, setCount] = useState(0);
  let random = Math.random()
  
  useEffect(() => {
    console.log(random)
  })

  return (
    <div>
      TestState: { count }
    </div>
  )
}