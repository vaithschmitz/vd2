import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './index.css';
import Splash from './routes/Splash/Splash';
import Navbar from './components/Navbar/Navbar'
import MSWalk from './routes/MSWalk/MSWalk'
import * as serviceWorker from './serviceWorker';


const routing = ( 
    <Router>
      <div id='Route-Navbar'><Navbar/> </div>
      <div id='desktopView'>
        {/* <Route component={Navbar}/> */}
        <Route exact path="/" component={Splash} />
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
