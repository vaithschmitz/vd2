import React from 'react'
import Video from './output.mp4'
import './MSWalk.css'
// import Video from './MSWalk Screengrab.mp4'

export default function MSWalk() {

    return (
      <div id="MSWalk-container">
        <div id='MSWalk-Descrip-container'>
            <h2>MS WALK LONDON WEB APP</h2>
            {/* <br/> */}
            <p>MS Walk London is the MS Society's biggest annual fundraising event with around 1000 concurrent participants making their way through London to raise money and awareness for Multiple Sclerosis
                To support such a great cause, I decided to play my part in helping out the amazing people from MS Society by making a live navigation and information app.
            </p>

            <p> The implementation of this mobile-first web app was guided by a few paradigms beyond standard brand guidelines. Given the nature of the charity and many participants, accessibility was of utmost importance.
                In the face of super tight time constraints and an unmovable deadline, I decided it would be the safest bet to make a React web app, knowing that native deploys were at a danger of being too late.
            </p>

            <p>
                Participants can choose one of four distances (dynamically rendered with Google's Directions API), overlaid on a Map, with state-based location updates to allow for live navigation along the chosen course.
                In addition to the navigation portion, there's some content to guide them along the way, as well as a few interactive quiz questions and additional event information.
                
            </p>
        </div> 
        <div id='MSWalk-Video-container'> <video id='MSWalk-Video' src={Video} autoPlay={true} loop={true}> </video></div> 
      </div>
    );
  }