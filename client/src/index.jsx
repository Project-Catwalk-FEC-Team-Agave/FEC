import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Overview from './components/Overview/overview.jsx';
import QA from './components/questions/qa.jsx';
import Related from './components/Related Items/related.jsx';
import Reviews from './components/Reviews/reviews.jsx'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

// ReactDOM.render(
//   <Overview />,
//   document.getElementById('app')
// )

// ReactDOM.render(
//   <Related />,
//   document.getElementById('app')
// )

// ReactDOM.render(
//   <Reviews />,
//   document.getElementById('app')
// )

// ReactDOM.render(
//   <QA />,
//   document.getElementById('app')
// )