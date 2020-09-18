import React from 'react'

export const CardBack = ({onClickParent}) => {
  const image = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Jean_Dodal_Tarot_reverse.jpg'
  return (<div onClick={onClickParent}>
    <img src={image} className={'Card-back'} alt='Card back' />
    </div>)
}

export default CardBack