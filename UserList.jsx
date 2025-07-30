import React from 'react';

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
          <button onClick={() => onEdit(user)} style={{ marginLeft: '10px' }}>
            Edit
          </button>
          <button onClick={() => onDelete(user.id)} style={{ marginLeft: '10px', color: 'red' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
