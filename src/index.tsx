import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from './components/First'
import UserComponent from './components/UserComponent'
ReactDOM.render(
    <div>
      <h1>Hello, Welcome to React and TypeScript</h1>
      <FirstComponent/>
      <UserComponent name="Nagarjuna Punna" age={20} location="Hyderabad" date={new Date()} />
    </div>,
    document.getElementById("root")
);