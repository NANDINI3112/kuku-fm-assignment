import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AudiobookList from './components/AudiobookList';
import AudiobookDetails from './components/AudiobookDetails';
import './styles/App.css';

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="app-title text-center">Audiobook Review App</h1>
      <Router>
        <Switch>
          <Route path="/" exact component={AudiobookList} />
          <Route path="/audiobooks/:id" component={AudiobookDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
