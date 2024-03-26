import { RouterProvider } from 'react-router-dom';
import './App.css';
import { rootRouter } from './router/rootRouter';

function App() {
  const pathname = window.location.pathname;

  console.log('pathname', pathname);
  return (
    <div className='font-apercuPro'>
      <RouterProvider router={rootRouter} />
    </div>
  );
}

export default App;
