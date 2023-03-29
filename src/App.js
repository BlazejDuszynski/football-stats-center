import "./App.css";
import Navbar from "./Components/General/Navbar";
import Home from "./Components/Pages/Home/Home";
import Search from "./Components/Pages/Search/Search";
import Team from "./Components/Pages/Team/Team";
import Player from "./Components/Pages/Player/Player";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Search", element: <Search /> },
  { path: "/Team", element: <Team /> },
  { path: "/Player", element: <Player /> },
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
