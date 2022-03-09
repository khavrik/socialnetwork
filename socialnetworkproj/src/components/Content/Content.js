import React from 'react'
import './Content.css'
import img1 from '../../img/elon.jpg'
import Posts from './Posts/Posts'

function Content(props){
    console.log("Content", props);
    return(
        <div className='content'>
            <div className='me'>
                <img src={img1}/>
                <div className='infoContainer'>
                    <p className='name'>Elon Musk</p>
                    <hr/>
                    <div className='infoContent'>
                        <p><span>Birth:</span> June 28, 1971</p>
                        <p><span>Age:</span> 50</p>
                        <p><span>Education:</span> University of Pennsylvania (BS, BA)</p>
                        <p>
                            <span>Title:</span> Founder, CEO and Chief Engineer of SpaceX
                            CEO and product architect of Tesla, Inc.
                        </p>
                    </div>
                </div>
                
            </div>
            <Posts postPage={props.postPage} dispatch={props.dispatch}/>
        </div>
    )
}

export default Content