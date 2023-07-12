import React from 'react';
import { Link } from 'react-router-dom'

function About() {
    return(
        <div>
            <h1>I am in the About component!</h1>
            <p>This is where I talk about what this demo is...</p>
            <Link to='/'>Click me to go back Home</Link>
        </div>
    )
}

export { About };