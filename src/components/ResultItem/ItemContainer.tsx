import styled from 'styled-components';

interface IProps {
  active: boolean;
}

const ResultItemContainer = styled.div`
  padding: 20px 50px;
  display: flex;
  align-content: center;
  background-color: ${(props: IProps) =>
    props.active === true ? 'hsl(262, 61%, 93%)' : '#fff'};
  :hover {
    cursor: pointer;
  }
`;

export default ResultItemContainer;
