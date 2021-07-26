import "./App.css";
import ContactList from "./components/ContactList";
import Add from "./components/Add";
import Edit from "./components/Edit";
import { Button } from "semantic-ui-react";
import { Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1> MERN CONTACT</h1>

      <Link to="/add">
        <Button color="orange">+ADD</Button>{" "}
      </Link>
      <Link to="/">
        {" "}
        <Button color="purple">Home</Button>{" "}
      </Link>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/add" component={Add} />
        <Route path="/edit/:id" component={Edit}/>
      </Switch>
    </div>
  );
}

export default App;
