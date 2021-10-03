

import { Router, Switch, Route} from "react-router";
import "./styles/styles.css";
import "./pages/index";
import "./pages/persa";


function App() {
  return (
    <div className="App"> 
    <Router>
      <Switch>
        <Route path="./index"> 
    <index/>
        </Route>
        <Route path="./persa"> 
    <persa/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}


export default App;
