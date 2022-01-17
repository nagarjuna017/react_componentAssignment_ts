import * as React from "react";
import UserInterface from '../UserInterface'
export default class UserComponent extends React.Component<UserInterface, {}> {
constructor (props: UserInterface){
  super(props);
}
render() {
  return (  
    <div>
      <h1>User Component</h1>
        Hello, <b>{this.props.name}</b>
        <br/>
        You are <b>{this.props.age} years old</b>
        <br/>
        Location: <b>{this.props.location}</b>
        <br/>
        Today's Date <b>{this.props.date.toDateString()}</b>
    </div>
    );
  }
}