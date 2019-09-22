import React, {useState} from 'react';
import Typing from 'react-typing-animation'
import './App.css';
import Robothead from './components/Robothead/Robothead'
import {SplashButton} from './components/Buttons/Buttons'

function App() {



  const [fE, setFE] = useState(false)
  const  AnimatedTypingComponent = ()  => {
    return(
    <div>
      <Typing>
        <span>Hello, Stranger.</span>
        <Typing.Backspace count={9}></Typing.Backspace>
        <Typing.Speed ms={200} />
        <span>......</span>
        <Typing.Speed ms={50} />
        <Typing.Delay ms={300}/>
        <Typing.Backspace count={6}></Typing.Backspace>
        <span>Friend!</span>
        <Typing.Delay ms={200}/>
        <br/>
        <Typing.Speed ms={30} />
        <span>Let me show you what I've been doing lately.</span>
        <Typing.Delay ms={200}/>
        <br/>
        <span id='Splash-typing-trigger'>What do you want to see first?</span>
        <Typing.Delay ms={200}/>
        <br/>
        <br/>
        
        <a className='Splash-Link' href='/mswalk' style={{color: 'red', borderColor: 'red'}}>Navigation Web App</a>
        <br/><br/>
        <a className='Splash-Link' href='/mswalk' style={{color: 'yellow', borderColor: 'yellow'}}>Offline Home Automation</a>
        <br/><br/>
        <a className='Splash-Link' href='/mswalk' style={{color: 'lightgreen', borderColor: 'lightgreen'}}>Pad Synthesizer</a>
        <br/><br/>
        <a className='Splash-Link' href='/mswalk' style={{color: 'lightblue', borderColor: 'lightblue'}}>Navigation Web App</a>
        <br/><br/>
        <a className='Splash-Link' href='/mswalk' style={{color: 'white', borderColor: 'white'}}>Contact</a>
      </Typing>
    </div>
    )
  } 




  return (
    <div id="Splash-container">
      {/* <div id='Splash-Robothead'> <Robothead /></div> */}
      <div className="Splash-Typing" > <AnimatedTypingComponent /></div>
      {/* <div id='SplashButton-container'>
          <SplashButton link={'/mswalk'} text={'Navigation Web App'}></SplashButton>
          <SplashButton link={'/mswalk'} text={'Navigation Web App'}></SplashButton>
          <SplashButton link={'/mswalk'} text={'Navigation Web App'}></SplashButton>
          <SplashButton link={'/mswalk'} text={'Navigation Web App'}></SplashButton>
        </div> */}
    </div>
  );
}

export default App;
