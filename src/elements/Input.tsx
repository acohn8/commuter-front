import styled from 'styled-components';
import colors from '../theme/colors';

const Input = styled.input`
  height: 25px;
  font-size: 16px;
  color: ${colors.mainText};
  border: none;
  margin: 5px 0;
  border-radius: 5px;
  padding: 0 10px;
  :focus {
    border: 1px solid hsl(261, 68%, 84%);
    outline: none;
    box-shadow: 0 0 0 1px;
    /* box-shadow: 0px 0px 0px 1px; */
  }
`;

export default Input;
