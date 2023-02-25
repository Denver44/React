import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(
    undefined
  );

  const onClick = () => {
    const userFind = users.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    setUser(userFind);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      {user?.name}
      {user?.age}
    </div>
  );
};

export default UserSearch;
