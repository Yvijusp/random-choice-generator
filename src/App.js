import { useState } from 'react';
import { Textarea } from './components/Textarea';

const App = () => {
  const [data, setData] = useState('');
  const [random, setRandom] = useState('');

  const handleClick = () => {
    if (!data) return;

    const choices = data.split(/\r?\n/);

    const randomItem = choices[Math.floor(Math.random() * choices.length)];

    setRandom(randomItem);
  };

  return (
    <div>
      <h1>Random choice generator</h1>
      <Textarea
        value={data}
        onChange={(e) => {
          setData(e.target.value);
          e.target.style.height = 'inherit';
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
      />
      <button onClick={handleClick}>Randomize</button>

      {random && <h3>{random}</h3>}
    </div>
  );
};

export default App;
