import React, {useEffect} from 'react'
import './Contact.css'
import CV from '../About/WebCV.pdf'
import { transcode } from 'buffer'

export default function Contact(){
    useEffect(()=>{
        document.getElementById('Contact-Linkedin').style.transform = 'translateY(0vh)skewX(-10deg)'
        document.getElementById('Contact-Github').style.transform = 'translateY(0vh)skewX(-10deg)'
        document.getElementById('Contact-CV').style.transform = 'translateY(0vh)skewX(-10deg)'
        document.getElementById('Contact-Email').style.transform = 'translateY(0vh)skewX(-10deg)'
    })
    return(
        <div id='Contact-container'>
            <div id='Contact-Linkedin'><a className='Contact-link' href='https://www.linkedin.com/in/vaithschmitz/'><div className='Contact-text'>LINKEDIN</div> </a></div>
            <div id='Contact-Github'><a className='Contact-link' href='https://github.com/vaithschmitz/'><div className='Contact-text'>GITHUB</div></a></div>
            <div id='Contact-CV'><a className='Contact-link' href={CV}><div className='Contact-text'>CV</div></a></div>
            <div id='Contact-Email'><a className='Contact-link' href="mailto:vaithschmitz@gmail.com"><div className='Contact-text'>EMAIL</div></a></div>
        </div>
    )
}