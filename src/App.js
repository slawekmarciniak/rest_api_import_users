import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UsersList from "./components/UsersList";

import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <UsersList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
