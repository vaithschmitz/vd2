import React, {useState} from 'react';
import Typing from 'react-typing-animation'
import './Splash.css';
import {SplashButton} from '../../components/Buttons/Buttons'
// import SplashVid from './SplashVid.mp4'
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

//   <div>
//   <p>
//     Thanks for checking out my website. I don't want to bore you with my CV, you can find that on LinkedIn (check the contact page).
//     Let me instead tell you a little bit about what moves and shakes my world, motivates me and why we should have a chat over some coffee (or virtual coffee).
//   </p>
//   <p>I've been fortunate to be in some form of consultancy for a pretty decent chunk of my life, helping me to understand different industries, consumer mindsets, markets and trends.</p>
//   <p>Seeing a ton of businesses struggle with being tech-enabled, I've decided to try and understand how this stuff actually works by learning to code.</p>

// </div>
// <div id='About-Right'>
//   <p>Engineering is pretty sweet, not gonna lie.</p>
//   <p>Playing around with lots of different things and making everything from websites to chatbots to hardware enabled home automation is crazy awesome.</p>
//   <p>I'm a firm believer in not limiting yourself to one language or framework, that being said, I currently get lots of enjoyment out of web-based stuff (Javascript, Node, React), embedded stuff (Arduino, Raspberry, C) and more peculiar things like snips. Python is super cool too and I should use it more.</p>
// </div>



  return (
    <div id="Splash-container">
    {/* <img src={pic}></img> */}
    <video id='SplashVid' src={SplashVid} width={"100%"} autoPlay={true} loop={true} muted={true}>
    </video>
      <div className='Splash-Typing'> <AnimatedTypingComponent /></div>

    </div>
  );
}

export default Splash;


