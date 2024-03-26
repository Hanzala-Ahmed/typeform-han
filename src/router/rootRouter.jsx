import { createBrowserRouter } from 'react-router-dom';
import { routerPath } from './routerList';
import Signup from '../pages/signup';

export const rootRouter = createBrowserRouter([
  {
    path: routerPath.homepage.root,
    element: <Signup />,
  },
]);
