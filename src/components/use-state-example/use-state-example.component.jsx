import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
  const [name, setName] = useState('Jennifer');
  const [address, setAddress] = useState('Amsterdam');

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName('Lara')}>Set Name to Lara</button>
      <button onClick={() => setAddress('Canada')}>Set Address</button>
    </Card>
  );
};


export default UseStateExample;
