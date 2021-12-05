import React, {useState} from 'react'

function MyCounter() {

    const [count, setCount] = useState(0)

    function increaseCount (){
        setCount(count + 1)
    }

    function decreaseCount (){
        setCount(count - 1)
    }

    return (
        <div>
            <h3>Counter Component</h3>
            <p>Count is: {count}</p>
            <button onClick={increaseCount}>Increase count</button>
            <button onClick={decreaseCount}>Decrease count</button>
            
        </div>
    )
}

export default MyCounter
