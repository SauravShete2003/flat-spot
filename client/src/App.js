import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Home</h1>
    },
    {
      path : '/navbar',
      element: <Navbar/>
    }
  
  ]);

  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

export default App;
