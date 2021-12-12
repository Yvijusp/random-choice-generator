import { Textarea as TextField } from '@chakra-ui/react';

export const Textarea = ({ onChange, value }) => {
  return (
    <TextField
      name='random'
      id='random'
      onChange={onChange}
      value={value}
      size='sm'
      marginBottom='4'
      fontSize='large'
      resize='none'
    />
  );
};
