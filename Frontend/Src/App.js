// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AudiobookList from './components/AudiobookList';
import AudiobookDetail from './components/AudiobookDetail';
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={AudiobookList} />
          <Route path="/audiobooks/:id" component={AudiobookDetail} />
          <Route path="/audiobooks/:id/review" component={ReviewForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
