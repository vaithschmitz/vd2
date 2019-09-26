import React, {useState} from 'react'
import './Navbar.css'

export default function Navbar(){
    const [expand, setExpanded] = useState(false)
    return(
        <div id='Navbar-container'>
            <div id='Navbar-middle'>
                <a href='https://vaith.dev/about'><div id='Navbar-Who'>ABOUT</div> </a>
                <div id='Navbar-Work' onClick={()=> setExpanded(!expand)}>WORK
                    <div id={expand ? 'Navbar-Work-dropdown' : 'Navbar-Work-hidden'} >
                        <a href='https://vaith.dev/mswalk'><div id='Navbar-Work-MS'>MS Walk</div></a>
                        <div id='Navbar-Work-memefy'>Memefy</div>
                        <div id='Navbar-Work-Synth'>WTSynth</div>
                        <div id='Navbar-Work-Jarvis'>Home Automation</div>
                    </div>
                </div>
                <a href='https://vaith.dev/contact'><div id='Navbar-Talk'>LET'S TALK</div></a>
            </div>
        </div>
    )
}