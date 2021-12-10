import styled from 'styled-components';

const Area = styled.textarea`
  width: 80%;
  display: block;
`;

export const Textarea = ({ onChange, value }) => {
  return <Area name='random' id='random' onChange={onChange} value={value} />;
};
