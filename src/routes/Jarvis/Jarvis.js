import React, {useEffect} from 'react'
import './Jarvis.css'
import tv from './tv.png'
import node from './node.svg'
import pi from './pi.svg'
import socket from './socket.svg'
import js from '../Memefy/jsLogo.svg'
import html from '../Memefy/html.svg'
import css from '../Memefy/cssLogo.svg'
import {GithubButton} from '../../components/Buttons/Buttons'

export default function Jarvis(){
    const $ = (x) => document.getElementById(x) 
    useEffect(() =>{
        $('Jarvis-container').style.opacity = 1;
        $('Jarvis-Headline').style.transform = 'translateX(0vw)';
        $('Jarvis-Descrip-container-left').style.transform = 'translateX(0vw)';
        $('Jarvis-Descrip-container-right').style.transform = 'translateX(0vw)';
        $('Jarvis-Video-container').style.transform = 'translateX(0vw)';
        
    })
    return(
        <div id='Jarvis-container'> 
            <p id='Jarvis-Headline'>Offline, On-Device Home Automation</p>
            <div id='Jarvis-Descrip-container-left'>
                <p className='Jarvis-Parag'>
                    Can't you just use Alexa?
                </p>

                <p className='Jarvis-Parag'>
                    Going beyond the current limits of smart home assistants like Google Assistant and Alexa, I built a fully on-device, offline home automation system.
                </p>

                <p className='Jarvis-Parag'> 
                    This system allows users to access a whole host of features, including setting custom profiles that know their preferred light settings (including brightness, color etc.), triggering videos, slideshows, and other content on a connected screen and more.
                </p>
                <div id='Jarvis-Logos-container'>
                <img className='Jarvis-Logo' src={pi}/>
                <img className='Jarvis-Logo' src={node}/>
                <img className='Jarvis-Logo' src={socket}/>
                <img className='Jarvis-Logo' src={html}/>
                <img className='Jarvis-Logo' src={css}/>
                <img className='Jarvis-Logo' src={js}/>
        </div>


            </div> 
            
            <div id='Jarvis-Descrip-container-right'>
            
            <p className='Jarvis-Parag'>
                How does this work?
            </p>
            <p className='Jarvis-Parag'>
                A microphone-connected Raspberry Pi running Raspbian hosts the snips.ai NLU platform in always-on mode. Once a hotword is detected, a custom node script handles server-based events like switching light colors, while websockets emit events to the frontend (display in kiosk mode) to change screen content based on user intent.
            </p>
            <p className='Jarvis-Parag'>
                Check out the video to the right for a guided run-through.
            </p>

            <GithubButton link={'https://github.com/vaithschmitz/jarvis'}/>


        </div> 
        
        <div id="Jarvis-Video-container">
            <img id='TVMock' src={tv}></img>
            <iframe id='Jarvis-Video' src="https://www.youtube.com/embed/zpd57vcpIHs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        
        </div>
    )
}