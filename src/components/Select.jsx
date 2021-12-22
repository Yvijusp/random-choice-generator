import {
  Flex,
  FormLabel,
  forwardRef,
  Select,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export const SelectElement = forwardRef(({ onChange }, ref) => {
  const bg = useColorModeValue('#fdfdfd', '#4f6486');

  return (
    <Flex alignItems='center'>
      <FormLabel htmlFor='select' fontSize={20}>
        Choose a seperator:
      </FormLabel>
      <Select
        marginBottom={2.5}
        width={200}
        onChange={onChange}
        ref={ref}
        id='select'
        backgroundColor={bg}
      >
        <option value='new-line'>New line</option>
        <option value='space'>Space</option>
        <option value='comma'>Comma</option>
        <option value='semicolon'>Semicolon</option>
      </Select>
    </Flex>
  );
});
