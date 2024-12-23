import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home  from "./Pages/Home";
import EcosystemAll from "./Pages/EcosystemAll";
// import { Header } from "./Components";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/Ecosystem" element={<EcosystemAll />} />
      </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
