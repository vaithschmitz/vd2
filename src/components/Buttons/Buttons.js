import React from 'react'
import './Buttons.css'
import githubLogo from './githubLogo.svg'
import chromeLogo from '../../routes/Memefy/chrome.svg'

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

function ChromeButton(props){
    return(
        <a href='https://chrome.google.com/webstore/detail/memefy/ojapbinmankpnplopneckenkgnmfjjgm'>
            <div className='GithubButton-container'>
                <div className='GithubButton-Logo'><img className='githubLogo' src={chromeLogo}></img></div>
                <div className='GithubButton-Text'>Get it here!</div>
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

export {GithubButton, ChromeButton, SplashButton}