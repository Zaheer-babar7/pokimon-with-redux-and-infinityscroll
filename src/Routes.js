import PokimonListing from './components/PokimonListing';
import PokimonDetails from './components/PokimonDetails';
import Header from './components/Header'
import {Navigate, useRoutes} from 'react-router-dom'


export default function Router() {
    return useRoutes([
      {
        path: "/",
        element: <Header />,
        children: [
          { path: "PokimonListing", element: <PokimonListing /> },
          { path: "PokimonListing/PokimonDetails/:id", element: <PokimonDetails /> },
        //   { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/PokimonListing" /> },
        // { path: "*", element: <Navigate to="/404" /> },
        ],
      },
      { path: "*", element: <Navigate to="/404" replace /> },
    ]);
  }
  