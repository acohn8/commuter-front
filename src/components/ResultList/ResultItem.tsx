import React from 'react';

interface IProps {
  placeName: string;
}

const ResultItem = ({ placeName }: IProps) => {
  return <div>{placeName}</div>;
};

export default ResultItem;
