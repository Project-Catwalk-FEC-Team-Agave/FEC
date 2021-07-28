import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Overview from './components/Overview/overview.jsx';
import QA from './components/questions/qa.jsx';
<<<<<<< HEAD
import Related from './components/Related Items/related.jsx';
import Reviews from './components/Reviews/Reviews.jsx'
=======
import Related from './components/Related Items/RelatedProductsContainer.jsx';
import Reviews from './components/Reviews/reviews.jsx'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
>>>>>>> cbdbc8c2619adc493e9393cddd8b22f6c93452ac

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// )

// ReactDOM.render(
//   <Overview />,
//   document.getElementById('app')
// )

// ReactDOM.render(
//   <Related />,
//   document.getElementById('app')
// )

ReactDOM.render(
  <Reviews />,
  document.getElementById('app')
)

// ReactDOM.render(
//   <QA />,
//   document.getElementById('app')
// )