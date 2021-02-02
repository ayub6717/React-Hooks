import React,{useContext} from 'react'
import ComponentD from './ComponentD'
import {UserContext, profileContext} from './../../App'

function ComponentC() {

    const username = useContext(UserContext)
    const profile = useContext(profileContext)
    return (
        <div>
            <ComponentD />
            <h1>name is {username} and profile is {profile} </h1>
        </div>
    )
}

export default ComponentC
