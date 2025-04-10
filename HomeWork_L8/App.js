import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import AnimalPage from './AnimalPage';
import FilmPage from './FilmPage';
import CountryPage from './CountryPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/countries">Countries</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/animals" component={AnimalPage} />
        <Route path="/films" component={FilmPage} />
        <Route path="/countries" component={CountryPage} />
      </div>
    </Router>
  );
}

export default App;
