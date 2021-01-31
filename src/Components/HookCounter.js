import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} > Icrease </button>
        </div>
    )
}

export default HookCounter
