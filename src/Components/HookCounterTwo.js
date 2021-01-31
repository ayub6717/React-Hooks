import React, {useState} from 'react'

function HookCounterTwo() {
    const [count, setCount] = useState(0)
    
    const IcrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prev => prev + 1)
        }
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} > Icrease </button>
            <button onClick={() => setCount(prev => count-1)} > Decrease </button>
            <button onClick={() => setCount(0)} > Reset </button>
            <button onClick={IcrementFive} > IcrementFive </button>
        </div>
    )
}

export default HookCounterTwo
