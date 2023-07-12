import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className="text-primary">
            <h1>I am in the home component!</h1>
            {/* <a href="/about">Click me to go to About! (using anchor tag)</a>
            <br /> */}
            <Link to="about">Click to go to About (using Link component)</Link>
        </div>
    )
}

export { Home };