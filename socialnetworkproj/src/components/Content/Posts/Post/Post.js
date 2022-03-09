import React from "react";
import img2 from '../../../../img/elon_mini.jpg'

function Post(props){
    return(
        <div className='post'>
            <img src={img2}/>
            <p className="postName">Elon Musk</p>
            <p>{props.text}</p>
        </div>
    )
}

export default Post