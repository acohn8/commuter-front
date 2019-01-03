import React from 'react';
import CardWrapper from './Wrapper';
import CardHeader from './Header';
import CardImage from './Image';
import CardContents from './Contents';
import P from '../../elements/P';
import CardSubheader from './Subheader';
import CardBody from './Body';

interface IProps {
  image?: string;
  header?: string;
  subheader?: string;
  text?: string;
}

const Card = ({ image, header, subheader, text }: IProps) => (
  <Card.Wrapper>
    <Card.Image src={image} />
    <Card.Contents>
      <Card.Header>{header}</Card.Header>
      <Card.Subheader>{subheader}</Card.Subheader>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card.Contents>
  </Card.Wrapper>
);

Card.Wrapper = CardWrapper;
Card.Contents = CardContents;
Card.Body = CardBody;
Card.Image = CardImage;
Card.Header = CardHeader;
Card.Subheader = CardSubheader;
Card.Text = P;

export default Card;
