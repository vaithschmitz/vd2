import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './index.css';
import Splash from './routes/Splash/Splash';
import About from './routes/About/About';
import Navbar from './components/Navbar/Navbar'
import MSWalk from './routes/MSWalk/MSWalk'
import Memefy from './routes/Memefy/Memefy'
import Contact from './routes/Contact/Contact'
import * as serviceWorker from './serviceWorker';


const routing = ( 
    <Router>
      <div id='Route-Navbar'><Navbar/> </div>
      <div id='desktopView'>
        {/* <Route component={Navbar}/> */}
        <Route exact path="/" component={Splash} />
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/mswalk' component={MSWalk}/>
          <Route path='/memefy' component={Memefy}/>
          <Route path='/contact' component={Contact}/>
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
