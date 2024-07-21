import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AudiobookList from './components/AudiobookList';
import AudiobookDetails from './components/AudiobookDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AudiobookList} />
        <Route path="/audiobooks/:id" component={AudiobookDetails} />
      </Switch>
    </Router>
  );
};

export default App;
