import React, { useState, useEffect, useContext } from 'react'
import { StoreContext } from 'store'
import { ServiceContext } from 'service'

export default function TestState () {
  let { person, time } = useContext(StoreContext)
  let { $dateFormat } = useContext(ServiceContext)

  return (
    <div>
      <p>{ $dateFormat(time) }</p>
      <div>
        <p>name: { person.name }</p>
        <p>age: { person.age }</p>
      </div>
    </div>
  )
}