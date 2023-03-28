import "./App.css";
import Navbar from "./Components/General/Navbar";
import Home from "./Components/Pages/Home/Home";
import Search from "./Components/Pages/Search/Search";
import Team from "./Components/Pages/Team/Team";
import Player from "./Components/Pages/Player/Player";

function App() {
  let component;
  console.log(window.location.pathname)
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/Search":
      component = <Search />;
      break;
    case "/Team":
      component = <Team />;
      break;
    case "/Player":
      component = <Player />;
  }
  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
