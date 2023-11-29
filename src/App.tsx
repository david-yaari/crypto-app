// Bootstrap CSS
import './css/custom.css';

// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

import NavBar from './components/navbar/OLDNavBar';
import imagePath from './assets/cryptomania_image_icon.png';
import 'bootstrap/dist/js/bootstrap.bundle';
import { RouterProvider, createBrowserRouter, Router } from 'react-router-dom';
import Home from './features/coins';
import Example from './components/navbar/MyNavbar';
import Cryptocurrencies from './pages/Cryptocurrencies';
import Coin from './features/coin';
import MyNavbar from './components/navbar/MyNavbar';

let items = ['Home', 'Product', 'Service'];

const router = createBrowserRouter([
  {
    element: (
      // <NavBar
      //   brandName='Cryptomania'
      //   imageSrcPath={imagePath}
      //   navItems={items}
      // />
      <>
        <MyNavbar />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/coin/:id',
        element: <Coin />,
      },
    ],
  },
]);

function App() {
  let items = ['Home', 'Product', 'Service'];
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
