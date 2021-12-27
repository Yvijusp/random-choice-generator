import {
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { AnswerField } from './components/AnswerField';
import { SelectElement } from './components/Select';
import { Textarea } from './components/Textarea';
import { Toggle } from './components/Toggle';

const App = () => {
  const [data, setData] = useState('');
  const [random, setRandom] = useState('');
  const [isSaved, setIsSaved] = useState(
    localStorage.getItem('input_data') ? true : false
  );
  const [seperator, setSeperator] = useState(null);

  const textareaRef = useRef();
  const selectRef = useRef();

  const { colorMode, toggleColorMode } = useColorMode();

  const handleRandomizeClick = () => {
    if (!data) return;

    if (!seperator) {
      const choices = data.split(/\r?\n/);
      const randomItem = choices[Math.floor(Math.random() * choices.length)];
      setRandom(randomItem);
      return;
    }

    const choices = data.split(seperator);

    const randomItem = choices[Math.floor(Math.random() * choices.length)];

    setRandom(randomItem);
  };

  const handleSaveForLater = () => {
    if (!data) return;

    if (isSaved) {
      localStorage.removeItem('input_data');
      localStorage.removeItem('seperator');
      setIsSaved(false);
      return;
    }

    localStorage.setItem('input_data', JSON.stringify(data));
    localStorage.setItem('seperator', JSON.stringify(seperator));
    setIsSaved(true);
  };

  const handleSeperatorSelect = (e) => {
    switch (e.target.value) {
      case 'new-line':
        return setSeperator(null);
      case 'space':
        return setSeperator(' ');
      case 'comma':
        return setSeperator(',');
      case 'semicolon':
        return setSeperator(';');
      default:
        return setSeperator(null);
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem('input_data');
    const savedSeperator = localStorage.getItem('seperator');

    if (savedData) {
      setData(JSON.parse(savedData));
      if (textareaRef.current) {
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }

    if (savedSeperator) {
      setSeperator(JSON.parse(savedSeperator));
      const seperator = JSON.parse(savedSeperator);

      switch (seperator) {
        case null:
          return (selectRef.current.selectedIndex = 0);
        case ' ':
          return (selectRef.current.selectedIndex = 1);
        case ',':
          return (selectRef.current.selectedIndex = 2);
        case ';':
          return (selectRef.current.selectedIndex = 3);
        default:
          return null;
      }
    }
  });

  return (
    <Container maxW='container.lg' marginTop={20}>
      <Flex position='fixed' top='4' right='6'>
        <Toggle onClick={toggleColorMode} colorMode={colorMode} />
      </Flex>
      <Text as='h1' fontSize='5xl' marginBottom='4'>
        Random choice generator
      </Text>
      <Text as='p' fontSize='2xl' marginBottom={4}>
        Helps you find out what to do for trivial matters when you don't know
        what to choose.
      </Text>

      <Container
        backgroundColor={useColorModeValue('ghostWhite', '#2D4263')}
        borderRadius={5}
        maxW='full'
        padding={8}
      >
        <SelectElement onChange={handleSeperatorSelect} ref={selectRef} />
        <Textarea
          value={data}
          onChange={(e) => {
            setData(e.target.value);
            e.target.style.height = 'inherit';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          ref={textareaRef}
        />
        <Button
          onClick={handleRandomizeClick}
          colorScheme='blue'
          marginRight='3'
        >
          Randomize
        </Button>
        {isSaved ? (
          <Button onClick={handleSaveForLater}>Remove saved</Button>
        ) : (
          <Button
            onClick={handleSaveForLater}
            colorScheme='blackAlpha'
            color={useColorModeValue('black', 'ghostWhite')}
          >
            Save for later
          </Button>
        )}
        {random && <AnswerField answer={random} />}
      </Container>
    </Container>
  );
};

export default App;
