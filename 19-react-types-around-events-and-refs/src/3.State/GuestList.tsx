import { useState } from 'react';

// Here if we don't mention the type then typescript inference the type
const GuestList: React.FC = () => {
  const [name, setName] = useState(''); // Here typeScript assume that name will  be string
  // const [guests, setGuests] = useState([]); // Here the typescript will think guests is type of any[] and any is not good so try to mentioned the type
  const [guests, setGuests] = useState<string[]>([]); // Here we manually mentioned that the typescript of guests is array of strings.

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
