// Bootstrap CSS
import './css/custom.css';

// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.min';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './features/coins';
import Coin from './features/coin';
import MyNavbar from './components/navbar/MyNavbar';

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
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
