import React from "react";
import { Routes, Route } from "react-router-dom";

//CSS
import "./components/css/App.css";
import "./components/css/welcome.css";
import "./components/css/login-register.css";
import "./components/css/questions.css";
import "./components/css/ui.css";
import "./components/css/settings.css";
import "./components/css/profiles.css";
import "./components/css/sliders.css";
import "./components/css/chat-frames.css";
import "./components/css/invitations.css";
import "./components/css/modal.css";

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
import UpdateImg from "./components/views/settings/update-img";
import UpdateName from "./components/views/settings/update-name";
import UpdateAge from "./components/views/settings/update-age";
import UpdateDiet from "./components/views/settings/update-diet";
import UpdatePlace from "./components/views/settings/update-place";
import UpdateDescription from "./components/views/settings/update-description";
//profiles
import User from "./components/views/profiles/user";
import Profile from "./components/views/profiles/profile";
//chats
import Chats from "./components/views/chat-frames/chats";
import Chat from "./components/views/chat-frames/chat";

import Home from "./components/views/home";
import Map from "./components/views/map";
import InvitationPage from "./components/models/invitation";
import CreateInvitation from "./components/models/createInvitation";
import InvitationCreated from "./components/views/invitation-created";
import Matched from "./components/views/matched";

const App = () => {
  return (
    <div className="App">
      {/* the app still needs to be formatted (media-queries) for every device,
       currently it is only workin right for the size of an IPhone 12 Pro */}
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
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/settings/update-name" element={<UpdateName />}></Route>
        <Route path="/settings/update-img" element={<UpdateImg />}></Route>
        <Route path="/settings/update-age" element={<UpdateAge />}></Route>
        <Route path="/settings/update-diet" element={<UpdateDiet />}></Route>
        <Route path="/settings/update-place" element={<UpdatePlace />}></Route>
        <Route
          path="/settings/update-description"
          element={<UpdateDescription />}
        ></Route>
        <Route path="/chats" element={<Chats />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/invitation" element={<InvitationPage />}></Route>
        <Route path="/create-invitation" element={<CreateInvitation />}></Route>
        <Route
          path="/invitation-created"
          element={<InvitationCreated />}
        ></Route>
        <Route path="/matched" element={<Matched />}></Route>
      </Routes>
    </div>
  );
};

export default App;
