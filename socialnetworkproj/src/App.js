import React from "react";
import Header from "./components/Header/Header";
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Messages from "./components/Messages/Messages";
import Users from "./components/Users/Users";


function App(props) {
  console.log("App", props);
  return (
    <div className="container">
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <div className="contentWrapper">
      <Routes>
        <Route path='/' element={<Content postPage={props.state.postPage} dispatch={props.dispatch}/>}/>
        <Route path='/messages' element={<Messages messagePage={props.state.messagePage} dispatch={props.dispatch}/>}/>
        <Route path='/messages/:id' element={<Messages messagePage={props.state.messagePage} dispatch={props.dispatch}/>}/>
        <Route path='/user' element={<Users/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
