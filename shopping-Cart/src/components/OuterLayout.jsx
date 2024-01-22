import { Outlet } from "react-router-dom";
import { Provider } from "react-redux"; // Correct import for React Redux Provider
import { Store } from '../Redux/Store';
import Navigation from "../components/Navbar";
const OuterLayout = () => {
  return (
    <div>
      <Provider store={Store}>
        <main>
        <Navigation />
          <Outlet />
        </main>
      </Provider>
    </div>
  );
};

export default OuterLayout;
