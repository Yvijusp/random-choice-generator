import { Textarea as TextField, useColorModeValue } from '@chakra-ui/react';
import { forwardRef } from 'react';

export const Textarea = forwardRef(({ onChange, value }, ref) => {
  const bg = useColorModeValue('#fdfdfd', '#4f6486');

  return (
    <TextField
      name='random'
      id='random'
      onChange={onChange}
      value={value}
      size='sm'
      marginBottom='4'
      backgroundColor={bg}
      fontSize='large'
      resize='none'
      ref={ref}
    />
  );
});
