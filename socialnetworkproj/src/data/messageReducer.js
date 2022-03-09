const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_MESSAGE = "CHANGE-MESSAGE"

const initialState = {
    messageTexts : [{text:'Hello',id:1},{text:'How are you?',id:2}, {text:"Let's go for a walk", id:3}],
    newMessageText : ''
}

const messageReducer = (state = initialState, action)=>{
    if (action.type === ADD_MESSAGE){
        let newMessage={
            text:state.newMessageText,
            id:Date.now()
        }
        state.messageTexts.push(newMessage)
        state.newMessageText = ''
    }
    else if (action.type === CHANGE_MESSAGE){
        state.newMessageText=action.text 
    }
    return state
}

export default messageReducer

export let addMessageAC = ()=>{
    return {
        type:ADD_MESSAGE,
        id:Date.now()
    }
}
export let onMessageChangeAC = (text)=>{
    return {
        type:CHANGE_MESSAGE,
        id:Date.now(),
        text:text
    }
}