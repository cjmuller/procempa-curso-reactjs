import React from 'react';
import CardLink from './styles';

const Card = ({ click, children }) => {

  return (
      <CardLink
        to={click}>
        {children}
      </CardLink>
  )
}

export default Card;
