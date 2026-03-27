import { useState } from "react"

const Counter = () => {

    const [count, setcount] = useState (0)

    const handleCounter = () => {
        setcount (count+1)
    }

    return (
        <>
           <p>My Count Is {count}</p> 

           <button onClick={handleCounter} className='bg-black text-white px-4 py-2' >Press</button>
        </>
    )
}

export default Counter