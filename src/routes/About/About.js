import React from 'react'
import CV from './WebCV.pdf'
import pic from './vaithpic.png'
import './About.css'

export default function About(){
    return(
        <div id='About-container'>
            <div id='About-left'> 
                <h2> Hey, I'm Vaith. </h2>
                <p>Thanks for checking out my website. I don't want to bore you by repeating my CV word for word (<a id='About-CV' href={CV}>click here</a>).</p>
                <p>Let me instead tell you a little bit about what moves and shakes my world, motivates me and why we should have a chat over some coffee.</p>
                
                <p>I've been fortunate enough to be in some form of consultancy for a pretty decent chunk of my life, helping me to gain insights and understand different industries, consumer mindsets, markets and trends.</p>
                <p>Seeing a ton of companies struggle with using tech, I've decided to try and understand how this stuff actually works by learning to how to build stuff.</p>
                <p>Turns out writing code and building stupid little robots is actually super rewarding and keeps your mental cogs turning.</p>
                <p>These days, when I'm not building apps, websites or hardware things, you'll probably find me obsessing over random food stuffs, from obscure Southern Chinese dishes to running batch experiments with my sous vide circulator, or making whacky beats (don't worry, I'm not plugging my Soundcloud).</p>
            </div>
            <div id='About-right'>
            <img id='vaithPic' src={pic}></img>
            </div>
        </div>

    )

}