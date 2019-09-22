import React from 'react'
import './Buttons.css'
import githubLogo from './githubLogo.svg'

export default function GithubButton(props){
    return(
        <a href={props.link}>
            <div className='GithubButton-container'>
                <div className='GithubButton-Logo'><img className='githubLogo' src={githubLogo}></img></div>
                <div className='GithubButton-Text'>View On Github</div>
            </div> 
        </a>
    )
}