import { Button, Container, Text } from '@chakra-ui/react';
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
    <Container maxW='container.lg'>
      <Text as='h1' fontSize='5xl' marginBottom='4'>
        Random choice generator
      </Text>
      <Textarea
        value={data}
        onChange={(e) => {
          setData(e.target.value);
          e.target.style.height = 'inherit';
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
      />
      <Button onClick={handleClick} colorScheme='blue'>
        Randomize
      </Button>

      {random && (
        <Text as='h3' fontSize='3xl' marginTop='4'>
          {random}
        </Text>
      )}
    </Container>
  );
};

export default App;
