import { useState } from 'react';
import { useAtom } from 'jotai';
import {
  firstNameAtom,
  lastnameAtom,
  ageAtom,
  hobbiesAtom
} from '../atoms/user.atom';

const User = () => {
  const [firstName, setFirstName] = useAtom(firstNameAtom);
  const [lastname, setLastname] = useAtom(lastnameAtom);
  const [age, setAge] = useAtom(ageAtom);
  const [hobbies, setHobbies] = useAtom(hobbiesAtom);

  const [formFirstName, setFormFirstName] = useState('');
  const [formLastname, setFormLastname] = useState('');
  const [formAge, setFormAge] = useState('');
  const [formHobbies, setFormHobbies] = useState<string[]>([]);

  const hobbyOptions = ['Reading', 'Music', 'Gym', 'Coding'];

  const handleHobbyChange = (hobby: string) => {
    if (formHobbies.includes(hobby)) {
      setFormHobbies(formHobbies.filter(item => item !== hobby));
    } else {
      setFormHobbies([...formHobbies, hobby]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setFirstName(formFirstName);
    setLastname(formLastname);
    setAge(Number(formAge));
    setHobbies(formHobbies);
  };

  return (
    <div>
      <h1>Jotai User Exercise</h1>

      <h2>User Info</h2>

      <div>First Name: {firstName}</div>
      <div>Last Name: {lastname}</div>
      <div>Age: {age}</div>
      <div>Hobbies: {hobbies.join(', ')}</div>

      <hr />

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={formFirstName}
            onChange={(event) => setFormFirstName(event.target.value)}
          />
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            value={formLastname}
            onChange={(event) => setFormLastname(event.target.value)}
          />
        </div>

        <div>
          <label>Age: </label>
          <input
            type="number"
            value={formAge}
            onChange={(event) => setFormAge(event.target.value)}
          />
        </div>

        <h3>Hobbies</h3>

        {hobbyOptions.map((hobby) => (
          <div key={hobby}>
            <label>
              <input
                type="checkbox"
                checked={formHobbies.includes(hobby)}
                onChange={() => handleHobbyChange(hobby)}
              />
              {hobby}
            </label>
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default User;