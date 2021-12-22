import { Circle, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Moon, Sun } from '../assets';

export const Toggle = ({ onClick, colorMode }) => {
  const bg = useColorModeValue('#fdfdfd', '#121212');
  const color = useColorModeValue('blackAlpha.800', '#fdfdfd');
  const borderColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');
  const hoverColor = useColorModeValue('#fdfdfd', 'blackAlpha.800');

  return (
    <Circle
      size='40px'
      bg={bg}
      border='1px'
      borderColor={borderColor}
      _hover={{
        backgroundColor: borderColor,
        color: hoverColor,
        border: 'none',
      }}
      padding={2}
      color={color}
      cursor='pointer'
      onClick={onClick}
    >
      {colorMode === 'light' ? <Sun /> : <Moon />}
    </Circle>
  );
};
