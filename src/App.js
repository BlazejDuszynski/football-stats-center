import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Search from "./Components/Pages/Search/Search";
import Team from "./Components/Pages/Team/Team";
import Player from "./Components/Pages/Player/Player";
import RootLayout from "./Components/Pages/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LeagueProvider from "./Components/Source/LeagueProvider";
import TableProvider from "./Components/Source/TableProvider";
import TeamProvider from "./Components/Source/TeamProvider";

const router = createBrowserRouter([
  {
    part: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Search", element: <Search /> },
      { path: "/Team", element: <Team /> },
      { path: "/Player", element: <Player /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <TeamProvider>
        <LeagueProvider>
          <TableProvider>
            <RouterProvider router={router}></RouterProvider>
          </TableProvider>
        </LeagueProvider>
      </TeamProvider>
    </div>
  );
}

export default App;
