import React from "react";


function UserInfo(props) {

  const users = props.users
  const [selectedUser, setSelectedUser] = React.useState()
  const selectedUserObject = users.find(user => user.id === parseInt(selectedUser))

  function handleSelect(event) {
    setSelectedUser(event.target.value);
  }

  return (
    <div>
      <select onChange={(event => handleSelect(event))}>
        <option selected value='default'>Select User</option>

        {users.map(user => <option value={user.id}>{user.name} {user.surname}</option>)}

      </select>

      {selectedUserObject && (
        <div>
          <h2>{selectedUserObject.name} {selectedUserObject.surname}</h2>
          <p>Date of Birth: {selectedUserObject.date}</p>
          <p>Email: {selectedUserObject.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
