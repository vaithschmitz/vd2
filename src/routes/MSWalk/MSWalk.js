import React from 'react'
import './MSWalk.css'
import MSWalkVid from './MSWalkVid.mp4'
import reactLogo from './reactLogo.svg'
import mapsLogo from './mapsLogo.svg'
import netlifyLogo from './netlifyLogo.svg'
import GithubButton from '../../components/Buttons/Buttons'


export default function MSWalk(props) {

    return (
      <div id="MSWalk-container">
        <div id='MSWalk-Descrip-container'>
            <p id='MSWalk-Headline'>MS WALK LONDON WEB APP</p>
            {/* <br/> */}
            <p className='MSWalk-Parag'>MS Walk London is the MS Society's biggest annual fundraising event with around 1000 concurrent participants making their way through London to raise money and awareness for Multiple Sclerosis
                To support such a great cause, I decided to play my part in helping out the amazing people from MS Society by making a live navigation and information app.
            </p>

            <p className='MSWalk-Parag'> The implementation of this mobile-first web app was guided by a few paradigms beyond standard brand guidelines. Given the nature of the charity and involved participants, accessibility was of utmost importance.
                In the face of super tight time constraints and an unmovable deadline, I decided it would be the safest bet to make a React web app, knowing that native deploys were at a danger of being too late.
            </p>

            <p className='MSWalk-Parag'>
                Participants can choose one of four distances (dynamically rendered with Google's Directions API), overlaid on a Map, with state-based location updates to allow for live navigation along the chosen course.
                In addition to the navigation portion, there's some content to guide them along the way, as well as a few interactive quiz questions and additional event information.
            </p>
            <br/><br/>
            <div id='MSWalk-Logos-container'>
                <img className='MSWalk-Logo' src={reactLogo}/>
                <img className='MSWalk-Logo' src={mapsLogo}/>
                <img className='MSWalk-Logo' src={netlifyLogo}/>
                <GithubButton link={'https://github.com/vaithschmitz/mswalk'}/>
            </div>
        </div> 
        <div id='MSWalk-Video-container'> <video id='MSWalk-Video' src={MSWalkVid} autoPlay={true} loop={true} muted={true}> </video></div> 
      </div>
    );
  }