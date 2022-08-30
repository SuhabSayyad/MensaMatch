import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//CSS
import "./components/css/App.css";
import "./components/css/welcome.css";
import "./components/css/login-register.css";
import "./components/css/questions.css";
import "./components/css/ui.css";

//Views
import Welcome from "./components/views/welcome/welcome";
import Welcome2 from "./components/views/welcome/welcome2";
import Welcome3 from "./components/views/welcome/welcome3";
import Login from "./components/views/login-register/login";
import Register from "./components/views/login-register/register";
import Pin from "./components/views/login-register/pin";
import Start from "./components/views/questions/start";
import Question1 from "./components/views/questions/question1";
import Question2 from "./components/views/questions/question2";
import Question3 from "./components/views/questions/question3";
import Question4 from "./components/views/questions/question4";
import Question5 from "./components/views/questions/question5";
import Question6 from "./components/views/questions/question6";
import Question7 from "./components/views/questions/question7";
import Main from "./components/views/main";

const App = () => {
  return (
    <div className="App">
      <Welcome/>
    </div>
  );
};

export default App;
