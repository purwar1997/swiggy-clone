import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import AppLayout from './components/AppLayout';
import Home from './components/Home';
import Search from './components/Search';
import Restaurant from './components/Restaurant';
import Checkout from './components/Checkout';
import Error from './components/Error';
import NotFound from './components/NotFound';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='restaurants/:restaurantId' element={<Restaurant />} />
      <Route path='search' element={<Search />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
