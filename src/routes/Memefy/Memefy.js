import React, {useEffect} from 'react'
import './Memefy.css'
import {ChromeButton} from '../../components/Buttons/Buttons'
import memefyVid from './memefyvid.mp4'
import html from './html.svg'
import css from './cssLogo.svg'
import js from './jsLogo.svg'
import firefox from './firefox.svg'
import chrome from './chrome.svg'


export default function Memefy() {
    const $ = (x) => document.getElementById(x) 
    useEffect(() =>{
        $('Memefy-container').style.opacity = 1;
        $('Memefy-Descrip-container').style.transform = 'translateX(0vh)';
        $('Memefy-Video-container1').style.transform = 'translateX(0vh)';
        $('Memefy-Video-container2').style.transform = 'translateX(0vh)';
        $('Memefy-Video-container3').style.transform = 'translateX(0vh)';
        $('Memefy-Logos-container').style.transform = 'translateX(0vh)';

    })

    return (
      <div id="Memefy-container">
         <p id='Memefy-Headline'>memefy Web Extension
         <br/><br/>
         <div><ChromeButton/></div>
         </p>
         
        <div id='Memefy-Descrip-container'>
            
            <p className='Memefy-Parag'>
                Perhaps the most important extension on the interwebs, memefy is available for Chrome and Firefox. 
            </p>

            <p className='Memefy-Parag'> 
                Born out of a dire need, memefy takes all those boring motivational images on LinkedIn, jealousy-inducing travel pics on Facebook and many more and turns them into the dankest memes.
            </p>

            <p className='Memefy-Parag'> 
                Implementation is super simple, on toggle, a content script queries the DOM for all img tags and replaces their sources with random memes queried from an API. 
            </p>

            <p className='Memefy-Parag'>
                Make your browsing better, get memefy today and start living again!
                
            </p>
            
            
            

        </div> 
        <div id='Memefy-Logos-container'>
                
                <img className='MSWalk-Logo' src={html}/>
                <img className='MSWalk-Logo' src={css}/>
                <img className='MSWalk-Logo' src={js}/>
                <img className='MSWalk-Logo' src={chrome}/>
                <img className='MSWalk-Logo' src={firefox}/>
        </div>
        <div id='Memefy-Video-container1'> <video id='Memefy-Video' src={memefyVid} autoPlay={true} loop={true} muted={true}> </video></div> 
        <div id='Memefy-Video-container2'> <video id='Memefy-Video' src={memefyVid} autoPlay={true} loop={true} muted={true}> </video></div> 
        <div id='Memefy-Video-container3'> <video id='Memefy-Video' src={memefyVid} autoPlay={true} loop={true} muted={true}> </video></div> 
      </div>
    );
  }

