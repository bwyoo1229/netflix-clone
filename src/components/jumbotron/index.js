import React from 'react';
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  Subtitle,
  Image,
} from './styles/jumbotron';

// for the compound components get children, specific prop you want and rest of the props
export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item direction={direction}>
      <Inner>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};
