import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseComntainer() {
    const [display, setdisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setdisplay(!display)} >Toggle</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseComntainer
