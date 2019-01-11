import styled from 'styled-components';
import RoundDiv from '../../elements/RoundDiv';
import colors from '../../theme/colors';

interface IProps {
  line: string;
}

const NextTrainsLineIndicator = styled(RoundDiv)`
  background-color: ${({ line }: IProps) => colors.metro[line]};
  height: 15px;
  width: 15px;
  margin-right: 10px;
`;

export default NextTrainsLineIndicator;
