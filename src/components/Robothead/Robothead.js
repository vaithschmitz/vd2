import React from 'react'
import './Robothead.css'

export default function Robothead(){
    return(
        <div id='Robothead-container'>
            <div id='Robothead-Antenna-left'>
                <div id='Antenna-left'></div>
            </div>

            <div id='Robothead-Antenna-right'>
                <div id='Antenna-right'></div>
            </div>
       

            <div id='Robothead-Face'>
                <div id='Robothead-Face-Eye-left'> 
                    <div id='Eye-left'>
                        <div id='Pupil-left'> </div>
                    </div>
                </div>

                <div id='Robothead-Face-Eye-right'> 
                    <div id='Eye-right'>
                        <div id='Pupil-right'> </div>
                    </div>
                </div>
                
                <div id='Robothead-Face-Mouth-top'>
                    <div id='Mouth-top'></div>  
                </div>

                <div id='Robothead-Face-Mouth-bottom'>
                    <div id='Mouth-bottom'></div>  
                </div>
            </div>
        </div> 
    )
}