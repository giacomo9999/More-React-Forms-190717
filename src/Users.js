import React, { Component } from "react";

class Users extends Component {
  handleUpdate = () => {
    this.props.updateUser(this.indexNum, this.name.value, this.age.value);
  };

  render() {
    const { allUsers, pressEditBtn, pressDelete } = this.props;
    const usersList = allUsers.map((user, index) => {
      return (
        <tr key={index}>
          <td>
            <input
              type="text"
              ref={val => {
                this.name = val;
              }}
              required
              defaultValue={user.name}
            />
            <input
              type="number"
              ref={val => {
                this.age = val;
              }}
              required
              defaultValue={user.age}
            />
            <input
              type="button"
              value="Update"
              ref={() => {
                this.indexNum = index;
              }}
              onClick={this.handleUpdate}
            />
          </td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
    );
  }
}

export default Users;
