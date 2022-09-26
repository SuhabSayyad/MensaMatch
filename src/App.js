import React, {Component} from "react";
import { Routes, Route } from "react-router-dom";


//CSS
import "./components/css/App.css";
import "./components/css/welcome.css";
import "./components/css/login-register.css";
import "./components/css/questions.css";
import "./components/css/ui.css";
import "./components/css/settings.css";
import "./components/css/user.css";
import "./components/css/sliders.css";

//---------------Views-----------------//
//welcome
import Welcome from "./components/views/welcome/welcome";
import Welcome2 from "./components/views/welcome/welcome2";
import Welcome3 from "./components/views/welcome/welcome3";
//login-register
import Login from "./components/views/login-register/login";
import Register from "./components/views/login-register/register";
import Pin from "./components/views/login-register/pin";
import Start from "./components/views/questions/start";
//questions
import Question1 from "./components/views/questions/question1";
import Question2 from "./components/views/questions/question2";
import Question3 from "./components/views/questions/question3";
import Question4 from "./components/views/questions/question4";
import Question5 from "./components/views/questions/question5";
import Question6 from "./components/views/questions/question6";
import Question7 from "./components/views/questions/question7";
//settings
import Settings from "./components/views/settings/settings";
import UpdateName from "./components/views/settings/update-name";
import UpdateAge from "./components/views/settings/update-age";
import UpdateDiet from "./components/views/settings/update-diet";
import UpdatePlace from "./components/views/settings/update-place";
import UpdateDescription from "./components/views/settings/update-description";

import Main from "./components/views/main";
import Browse from "./components/views/browse";
import User from "./components/views/user";
//chats
import Chats from "./components/views/chat-frames/chats";



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/welcome2" element={<Welcome2 />}></Route>
        <Route path="/welcome3" element={<Welcome3 />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/register-pin" element={<Pin />}></Route>
        <Route path="/start-questions" element={<Start />}></Route>
        <Route path="/question1" element={<Question1 />}></Route>
        <Route path="/question2" element={<Question2 />}></Route>
        <Route path="/question3" element={<Question3 />}></Route>
        <Route path="/question4" element={<Question4 />}></Route>
        <Route path="/question5" element={<Question5 />}></Route>
        <Route path="/question6" element={<Question6 />}></Route>
        <Route path="/question7" element={<Question7 />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/settings/update-name" element={<UpdateName />}></Route>
        <Route path="/settings/update-age" element={<UpdateAge />}></Route>
        <Route path="/settings/update-diet" element={<UpdateDiet />}></Route>
        <Route path="/settings/update-place" element={<UpdatePlace />}></Route>
        <Route
          path="/settings/update-description"
          element={<UpdateDescription />}
        ></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/chats" element={<Chats />}></Route>
      </Routes>
    </div>
  );
};

export default App;
