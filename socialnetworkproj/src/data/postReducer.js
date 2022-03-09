const ADD_POST = "ADD-POST"
const CHANGE_POST = "CHANGE-POST"

const initialState = {
    postTexts : [{text:'Hi, everyone', id:1}, {text:"I am Elon Musk", id:2}, {text:"How are you?", id:3}],
    newPostText : ''
}

const postReducer = (state = initialState, action)=>{
    if (action.type === ADD_POST){
        let newPost={
            text:state.newPostText,
            id:Date.now()
        }
        state.postTexts.unshift(newPost)
        state.newPostText=''
    }
    else if (action.type === CHANGE_POST){
        state.newPostText=action.text
    }
    console.log(state);
    return state
}

export default postReducer

export let addPostAC = ()=>{
    return {
        type:ADD_POST,
        id:Date.now()
    }
}
export let onPostChangeAC = (text)=>{
    return {
        type:CHANGE_POST,
        id:Date.now(),
        text:text
    }
}