import React from 'react'

function Welcome({name}) {

    // const { name } = props
    //return <h1>Welcome {name}!</h1>
    return <h1>Welcome {name || 'Guest'}!</h1>
}

export default Welcome