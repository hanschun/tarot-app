import React from 'react'
import {CardBack} from './CardBack'

export const Card = ({card}) => {
  if (! card) {
    return <CardBack />
  }
  return <img src={card.image} className={'Card'} alt={`Card for the Major Arcana Tarot Card ${card.name}`} />
}

export default Card