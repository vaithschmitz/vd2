import React from 'react'
import './Buttons.css'
import githubLogo from './githubLogo.svg'

function GithubButton(props){
    return(
        <a href={props.link}>
            <div className='GithubButton-container'>
                <div className='GithubButton-Logo'><img className='githubLogo' src={githubLogo}></img></div>
                <div className='GithubButton-Text'>View On Github</div>
            </div> 
        </a>
    )
}

function SplashButton(props){
    return(
        <a href={props.link}>
        <div className='SplashButton-container'>
            <div className='Splashbutton-Text'>{props.text}</div>
        </div> 
    </a>
    )
}

export {GithubButton, SplashButton}