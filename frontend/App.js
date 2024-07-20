import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AudiobookList from './components/AudiobookList';
import AudiobookDetail from './components/AudiobookDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AudiobookList} />
        <Route path="/audiobook/:id" component={AudiobookDetail} />
      </Switch>
    </Router>
  );
}

export default App;
