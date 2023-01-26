import React from 'react';

function UserList({ users, handleToggle, modInput, delInput }) {
  console.log('UserList 렌더링');
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            style={{ color: user.active && 'blue' }}
            onClick={() => handleToggle(user.id)}
          >
            {user.name} ({user.email})
            <button onClick={() => modInput(user.id)}>수정</button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                delInput(user.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(UserList);
