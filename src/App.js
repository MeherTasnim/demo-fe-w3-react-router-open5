import React from 'react';
import { Home } from './routes/Home'
import { About } from './routes/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routerPius = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
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