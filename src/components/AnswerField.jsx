import { Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export const AnswerField = ({ answer }) => {
  const bg = useColorModeValue('#fdfdfd', '#4f6486');
  const borderColor = useColorModeValue('gainsboro', 'whiteAlpha.300');

  return (
    <Stack marginTop={5}>
      <Text as='h2' fontSize='4xl'>
        Your random choice:
      </Text>
      <Container
        maxW='full'
        backgroundColor={bg}
        border='2px'
        borderRadius={4}
        borderColor={borderColor}
      >
        <Text as='h3' fontSize='3xl'>
          {answer}
        </Text>
      </Container>
    </Stack>
  );
};
