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
      <span>Let me show you what I've been doing recently.</span>
      <br/>
      <span>What do you want to see first?</span>
      <br/>
      <button>Mobile-first charity web app</button>
      <br/>
      <button>Offline hardware home automation</button>
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
