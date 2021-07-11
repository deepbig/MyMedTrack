import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/my-med-track.scss";
import PresentationPage from "views/PresentationPage/PresentationPage";
import DataGatheringPage from "views/DataGatheringPage/DataGatheringPage";
import InterviewsPage from "views/InterviewsPage/InterviewsPage";
import SketchingIdeationPage from "views/SketchingIdeationPage/SketchingIdeationPage";
import reportWebVitals from './reportWebVitals';

var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={PresentationPage} />
        <Route path="/data-gathering" component={DataGatheringPage} />
        <Route path="/interviews" component={InterviewsPage} />
        <Route path="/sketching-ideation" component={SketchingIdeationPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
