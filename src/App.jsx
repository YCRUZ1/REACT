
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./styles/styles.css";

import Index from "paginas";
import Persa from "paginas";



function App() {
  return (
    <div className="App"> 
    <Router>
      <Switch>
        <Route path="/"> 
          <Index/>
        </Route>
        <Route path="/"> 
          <Persa/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}


export default App;

