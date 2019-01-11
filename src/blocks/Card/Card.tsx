import React from 'react';
import CardWrapper from './Wrapper';
import CardHeader from './Header';
import CardImage from './Image';
import CardContents from './Contents';
import CardSubheader from './Subheader';
import CardBody from './Body';
import CardMeta from './Meta';

interface IProps {
  image?: string;
  header?: string;
  subheader?: string;
  meta?: string;
  children: any;
}

const Card = ({ image, header, subheader, children, meta }: IProps) => (
  <Card.Wrapper>
    <Card.Image src={image} />
    <Card.Contents>
      <Card.Header>{header}</Card.Header>
      <Card.Subheader>{subheader}</Card.Subheader>
      <Card.Body>{children}</Card.Body>
      <Card.Meta>{meta}</Card.Meta>
    </Card.Contents>
  </Card.Wrapper>
);

Card.Wrapper = CardWrapper;
Card.Contents = CardContents;
Card.Body = CardBody;
Card.Image = CardImage;
Card.Header = CardHeader;
Card.Subheader = CardSubheader;
Card.Meta = CardMeta;

export default Card;
