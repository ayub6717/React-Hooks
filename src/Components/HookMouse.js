import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=> {
        console.log( 'useEffect called')
        window.addEventListener('Mousemove', logMousePosition ) 
    }, [])
    return (
        <div>
           <h3> Hooks X - {x} Y - {y}</h3>
        </div>
    )
}

export default HookMouse
