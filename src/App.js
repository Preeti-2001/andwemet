import {Route, Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Favourites from "./pages/Favourites";
import Home from './pages/Home';
import Polls from "./pages/Polls";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/polls" component={Polls}></Route>
      <Route exact path="/favourites" component={Favourites}></Route>
      {/* <Route exact path="/" component={Home}></Route> */}
      </Switch>
      </div>
  );
}

export default App


// import './App.css';
// import Home from './pages/Home';

// function App() {
//   return (
//     <div className="App">
//     <h1>Hello</h1>
//     <Home/>
//     </div>
//   );
// }

// export default App;
