import React, {useEffect, useState} from 'react'

function HookUseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect (() => {
        console.log(`useEffect- updating value`)
        document.title= `You Click ${count} Times`
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=> setCount(count+1)}>
                click me {count}
            </button>
        </div>
    )
}

export default HookUseEffect
