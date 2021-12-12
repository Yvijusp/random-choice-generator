import { Button, Container, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { Textarea } from './components/Textarea';

const App = () => {
  const [data, setData] = useState('');
  const [random, setRandom] = useState('');
  const [isSaved, setIsSaved] = useState(
    localStorage.getItem('input_data') ? true : false
  );

  const textareaRef = useRef();

  const handleRandomizeClick = () => {
    if (!data) return;

    const choices = data.split(/\r?\n/);

    const randomItem = choices[Math.floor(Math.random() * choices.length)];

    setRandom(randomItem);
  };

  const handleSaveForLater = () => {
    if (!data) return;

    if (isSaved) {
      localStorage.removeItem('input_data');
      setIsSaved(false);
      return;
    }

    localStorage.setItem('input_data', JSON.stringify(data));
    setIsSaved(true);
  };

  useEffect(() => {
    let savedData = localStorage.getItem('input_data');

    if (savedData) {
      setData(JSON.parse(savedData));
      if (textareaRef.current) {
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }
  });

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
        ref={textareaRef}
      />
      <Button onClick={handleRandomizeClick} colorScheme='blue' marginRight='3'>
        Randomize
      </Button>

      {isSaved ? (
        <Button onClick={handleSaveForLater}>Remove saved</Button>
      ) : (
        <Button onClick={handleSaveForLater} colorScheme='blackAlpha'>
          Save for later
        </Button>
      )}

      {random && (
        <Text as='h3' fontSize='3xl' marginTop='4'>
          {random}
        </Text>
      )}
    </Container>
  );
};

export default App;
