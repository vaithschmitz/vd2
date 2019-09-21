import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './index.css';
import App from './App';
import MSWalk from './routes/MSWalk/MSWalk'
import * as serviceWorker from './serviceWorker';


const routing = ( 
    <Router>
      <div id='desktopView'>
        {/* <Route component={Navbar}/> */}
        <Route exact path="/" component={App} />
        <Switch>
          <Route path='/mswalk' component={MSWalk}/>
        </Switch>
        {/* <Route component={Footer}/> */}
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
