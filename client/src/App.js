import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Home</h1>
    },
  
  ]);

  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

export default App;
