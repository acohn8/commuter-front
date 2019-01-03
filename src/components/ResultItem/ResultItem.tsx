import React from 'react';
import ResultItemContainer from './ItemContainer';
import ResultItemText from './ItemText';

interface IProps {
  placeName: string;
  handleMouseOver: (e: React.MouseEvent, id: string) => void;
  handleClick: () => void;
  id: string;
  active: boolean;
}

const ResultItem = ({
  placeName,
  handleMouseOver,
  id,
  active,
  handleClick
}: IProps) => {
  return (
    <ResultItemContainer
      onMouseOver={e => handleMouseOver(e, id)}
      onClick={handleClick}
      active={active}
    >
      <ResultItem.Text>{placeName}</ResultItem.Text>
    </ResultItemContainer>
  );
};

ResultItem.Container = ResultItemContainer;
ResultItem.Text = ResultItemText;

export default ResultItem;
