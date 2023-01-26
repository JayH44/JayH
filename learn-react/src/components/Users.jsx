import UserCreate from './UserCreate';
import UserList from './UserList';
import { useState, useRef } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';

const countActive = (userList) => {
  console.log('countActive 실행!');
  return userList.filter((user) => user.active).length;
};

const initialState = [
  { id: 1, name: 'jayH', email: 'jay@gmail.com', active: true },
  { id: 2, name: 'rrayH', email: 'qwejay@gmail.com', active: false },
  { id: 3, name: 'ayqqH', email: 'jayewr@gmail.com', active: false },
];

const initialInputs = {
  name: '',
  email: '',
};

function Users() {
  const [inputs, setInputs] = useState(initialInputs);
  const [users, setUsers] = useState(initialState);
  const nextId = useRef(4);
  const inputRef = useRef();
  const { name, email } = inputs;

  const count = useMemo(() => countActive(users), [users]);
  console.log(count);

  const handleInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({ ...inputs, [name]: value });
    },
    [inputs]
  );

  //   const resetInputs = () => {
  //     setInputs(initialInputs);
  //     inputRef.current.focus();
  //   };

  const regiInput = useCallback(() => {
    // setUsers([...users, { id: nextId.current++, name, email }]);

    setUsers((users) => users.concat({ id: nextId.current++, name, email }));
    setInputs(initialInputs);
  }, [name, email]);

  const modInput = useCallback(
    (id) => {
      const name = prompt('수정할 이름을 입력해주세요');
      const email = prompt('수정할 이메일을 입력해주세요');
      if (!name || !email) {
        alert('이름과 이메일을 입력해주세요');
        return;
      }

      const newUsers = [...users];
      newUsers[id - 1].name = name;
      newUsers[id - 1].email = email;
      setUsers(newUsers);
    },
    [users]
  );

  const delInput = useCallback(
    (id) => {
      if (!window.confirm('정말 삭세하시겠습니까?')) return;
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const handleToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  return (
    <div>
      <UserCreate
        onChange={regiInput}
        handleInput={handleInput}
        regiInput={regiInput}
        // resetInputs={resetInputs}
        inputRef={inputRef}
        name={name}
        email={email}
      />
      <UserList
        users={users}
        handleToggle={handleToggle}
        modInput={modInput}
        delInput={delInput}
      />
    </div>
  );
}

export default Users;
