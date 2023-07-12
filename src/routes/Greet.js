import React from 'react';
import { useParams } from 'react-router-dom';

function Greet () {

    const params = useParams(); // reading the URL parameters

    return(
        <div>
            <h1>
                Hello, {params.name}! You're great!
            </h1>
        </div>
    )
}

export { Greet }