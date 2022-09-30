import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header'
import {Navigate, useRoutes} from 'react-router-dom'


export default function Router() {
    return useRoutes([
      {
        path: "/",
        element: <Header />,
        children: [
          { path: "productListing", element: <ProductListing /> },
          { path: "productListing/productDetails/:id", element: <ProductDetails /> },
        //   { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/productListing" /> },
        // { path: "*", element: <Navigate to="/404" /> },
        ],
      },
      { path: "*", element: <Navigate to="/404" replace /> },
    ]);
  }
  