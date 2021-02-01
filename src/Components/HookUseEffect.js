import React, {useEffect, useState} from 'react'

function HookUseEffect() {
    const [count, setCount] = useState(0)

    useEffect (() => {
        document.title= `You Click ${count} Times`
    })
    return (
        <div>
            <button onClick={()=> setCount(count+1)}>
                click me {count}
            </button>
        </div>
    )
}

export default HookUseEffect
