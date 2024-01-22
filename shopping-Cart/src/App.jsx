

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import OuterLayout from "./components/OuterLayout";

import ShoesDashboard from "./components/Shoes/ShoesDashboard";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<OuterLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shoes" element={<ShoesDashboard/>} />
      </Route>
    )
  );

  return (
    <div>
      
      <RouterProvider router={router}>
       
      </RouterProvider>
    </div>
  );
};

export default App;
