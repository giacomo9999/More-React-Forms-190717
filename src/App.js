import React, { Component } from "react";
import Users from "./Users";
import AddUser from "./AddUser";
import "./App.css";

class App extends Component {
  state = {
    users: [
      { name: "Honoria Dedlock", age: 39, isEditing: false },
      { name: "Uriah Heep", age: 77, isEditing: false },
      { name: "Charity Pecksniff", age: 23, isEditing: false },
      { name: "Woolwich Bagnet", age: 52, isEditing: false }
    ]
  };

  // New User is received from AddUser.js
  addUser = newUser => {
    let users = [...this.state.users, newUser];
    this.setState({ users });
  };

  // when function is invoked (i) is received form Users.js
  pressEditBtn = i => {
    let users = this.state.users;
    users[i].isEditing = true;
    this.setState({ users });
  };

  // (i, name, age) are received from Users.js
  updateUser = (i, name, age) => {
    let users = this.state.users;
    users[i].name = name;
    users[i].age = age;
    users[i].isEditing = false;
    this.setState({ users });
  };

  // (i) is received from Users.js
  pressDelete = i => {
    let users = this.state.users.filter((entry, index) => index !== i);
    this.setState(users);
  };

  render() {
    return (
      <div className="container">
        <h1>App Component</h1>
        <Users
          allUsers={this.state.users}
          pressEditBtn={this.pressEditBtn}
          pressDelete={this.pressDelete}
        />
        <AddUser addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
