import React, {useState} from 'react'
import './Navbar.css'

export default function Navbar(){
    const [expand, setExpanded] = useState(false)
    return(
        <div id='Navbar-container'>
            <div id='Navbar-middle'>
                <a href='/about'><div id='Navbar-Who'>ABOUT</div> </a>
                <div id='Navbar-Work' onClick={()=> setExpanded(!expand)}>WORK
                    <div id={expand ? 'Navbar-Work-dropdown' : 'Navbar-Work-hidden'} >
                        <a href='/mswalk'><div id='Navbar-Work-MS'>MS Walk</div></a>
                        <a href='/memefy'><div id='Navbar-Work-memefy'>Memefy</div></a>
                        <div id='Navbar-Work-Synth'>WTSynth</div>
                        <a href='/jarvis'><div id='Navbar-Work-Jarvis'>Home Automation</div></a>
                    </div>
                </div>
                <a href='/contact'><div id='Navbar-Talk'>LET'S TALK</div></a>
            </div>
        </div>
    )
}