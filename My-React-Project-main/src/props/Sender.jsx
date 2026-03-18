import React from 'react'
import Reciever from './Reciever'

const Sender = () => {

  const name = "Daniyal"

  return (
    <div>
      Sender

      <br />

      <Reciever abc={name} />
    </div>
  )
}

export default Sender
