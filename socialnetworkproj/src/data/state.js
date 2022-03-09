/* import messageReducer from "./messageReducer"
import postReducer from "./postReducer"

let store = {
    _state : { 
        messagePage : {
            messageTexts : [{text:'Hello',id:1},{text:'How are you?',id:2}, {text:"Let's go for a walk", id:3}],
            newMessageText : ''
        },
        postPage: {
            postTexts : [{text:'Hi, everyone', id:1}, {text:"I am Elon Musk", id:2}, {text:"How are you?", id:3}],
            newPostText : ''
        }
    },
    dispatch(action){
        this._state.postPage = postReducer(action, this._state.postPage)
        this.RenderTree(this._state)
        this._state.messagePage = messageReducer(action, this._state.messagePage)
        this.RenderTree(this._state)
    },   
    RenderTree(){
        console.log('fake funnction');
    },
    Subscribe (observer){
        this.RenderTree = observer
    },
    getState(){
        return this._state
    }
}

export default store */