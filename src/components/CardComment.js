import React from 'react';

import classes from '../styles/CardComment.css';

const CardComment = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default CardComment;