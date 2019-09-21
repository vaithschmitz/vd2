import React from 'react';
import Typing from 'react-typing-animation'
import './App.css';
import Robothead from './components/Robothead/Robothead'

function App() {
  const AnimatedTypingComponent = () => (
    <Typing>
      <span>Hello, Stranger.</span>
      <Typing.Backspace count={9}></Typing.Backspace>
      <span>Friend.</span>
      <br/>
      {/* <Typing.Delay ms={1000} /> */}
      <span>Let me show you what I'm working on.</span>
      <br/>
      <span>What do you want to see first?</span>
      <br/>
      <button>Mobile-first charity web app</button>
      <br/>
      <button>Offline hardware home automation</button>
      {/* <span>Let me show you what I've been doing recently.</span> */}
    </Typing>
  );
  return (
    <div id="Splash-container">
      <Robothead />
      <div className="Splash-Typing" > <AnimatedTypingComponent /></div>
    </div>
  );
}

export default App;
