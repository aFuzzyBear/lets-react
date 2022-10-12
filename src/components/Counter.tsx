import {useState} from 'react'

export const Counter = ()=>{
    const [count,setCount]= useState(0)

    return(
        <>
            <div className="buttons">
                <button onClick={()=>setCount(count + 1)}>+</button>
                <p>{count}</p>
                <button onClick={()=>setCount(count - 1)}>-</button>
            </div>
        </>
    )
}