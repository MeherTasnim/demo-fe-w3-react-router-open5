import React from 'react';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Greet } from './routes/Greet';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routerPius = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/greet/:name',
        element: <Greet />
    }
]);

function App() {
    return(
        <div>
            <RouterProvider router={routerPius} />
        </div>
    )
}

export { App };