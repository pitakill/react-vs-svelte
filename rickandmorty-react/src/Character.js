import React from 'react';
import './Character.css';

function Character(props) {
  return (
    <figure>
      <img src={props.image} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  )
};

export default Character;
