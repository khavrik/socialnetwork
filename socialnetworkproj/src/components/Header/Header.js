import React from 'react'
import './Header.css'
import videoLogog from '../../img/videoLogog.png'

function Header(){
    return(
        <div className='header'>
            <img src={videoLogog}/>
            <p>MyFirstSocialNetwork</p>
        </div>
    )
}

export default Header