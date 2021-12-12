import { Textarea as TextField } from '@chakra-ui/react';
import { forwardRef } from 'react';

export const Textarea = forwardRef(({ onChange, value }, ref) => {
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
      ref={ref}
    />
  );
});
