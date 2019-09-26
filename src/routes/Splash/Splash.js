import React, {useState} from 'react';
import Typing from 'react-typing-animation'
import './Splash.css';
import {SplashButton} from '../../components/Buttons/Buttons'
import SplashVid from './SplashVid.mp4'


function Splash() {

  const  AnimatedTypingComponent = ()  => {
    return(
    <div>
      <Typing hideCursor={true}>
        <span>Hey there, Stranger.</span>
        <Typing.Backspace count={9}></Typing.Backspace>
        <Typing.Speed ms={200} />
        <span>...</span>
        <Typing.Speed ms={50} />
        <Typing.Delay ms={300}/>
        <Typing.Backspace count={4}></Typing.Backspace>
        <span> Friend!</span>
        <Typing.Delay ms={200}/>
        <br/>
        <Typing.Speed ms={30} />
        <span>Welcome to my personal website.</span>
        <Typing.Delay ms={200}/>
        <br/>
        <span>Take a look around to see what I'm working on.</span>
      </Typing>
    </div>
    )
  } 

  return (
    <div id="Splash-container">
    <video id='SplashVid' src={SplashVid} width={"100%"} autoPlay={true} loop={true} muted={true}>
    </video>
      <div className='Splash-Typing'> <AnimatedTypingComponent /></div>

    </div>
  );
}

export default Splash;


