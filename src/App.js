import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import PostList from "./PostList";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/2019/09">September 2019</Link>
            </li>
            <li>
              <Link to="/2019/10">October 2019</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {/*Alternative way of writing the route */}
          <Route path="/:year/:month" component={PostList} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
