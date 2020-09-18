import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {drawMajorByName, deal} from 'tarot-cards'
import {Card} from './components/Card'
import {CardBack} from './components/CardBack'

function App(props) {
  const [card, setCard] = useState()
  const { employees } = props;
  
  useEffect(() => {
    (function() {
      const c = drawMajorByName('Death')
      console.log(c)
      setCard(c)
    })()
  }, [])

  const dealCard = () => {
    console.log('DEAL!')
    const next = deal(card.name)
    setCard(next)
  }

  if (!card) {
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <div className="App-padding"></div>
      <div className="App-section">
        <CardBack onClickParent={dealCard}/>
        <Card card={card}/>
      </div>
      <div className="App-padding"></div>
  </div>
  );
}

export default App;
