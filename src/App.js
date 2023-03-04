import './App.css';
import CustomerHome from './components/CustomerHome';
import ExpertHome from './components/ExpertHome';
import Login from './components/Login';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './components/ErrorPage';


const router=createBrowserRouter([
  {
    path:'/',
    element:<Login />,
    errorElement:<ErrorPage />
  },
  {
    path:'/customer',
    element:<CustomerHome />,
    errorElement:<ErrorPage />
  },
  {
    path:'/expert',
    element:<ExpertHome />,
    errorElement:<ErrorPage />

  },
])
function App() {
  return (
    <div className="App">
      {/* <CustomerHome /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
