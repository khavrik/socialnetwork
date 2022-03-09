import React from "react";
import { addPostAC, onPostChangeAC } from "../../../data/postReducer.js";
import Post from "./Post/Post";
import "./Posts.css"

function Posts(props){
    console.log("Posts", props);
    let postText = React.createRef()
    let addPost = ()=>{
        if (postText.current.value.trim() !== ''){
            props.dispatch(addPostAC())
            postText.current.value = ''
        }
    }
    let onPostChange = ()=>{
        props.dispatch(onPostChangeAC(postText.current.value))
    }
    return(
        <div className='posts'>
            <input placeholder='Enter the post' ref={postText} value={props.postPage.newPostText} onChange={onPostChange}/>
            <button onClick={addPost}>To post</button>
            {props.postPage.postTexts.map((el)=><Post text={el.text} key={el.id}/>)}
        </div>
    )
}

export default Posts                 