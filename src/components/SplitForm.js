import { useState } from 'react';
import { Button } from './Button';

export const SplitForm = ({ shareWith, setShareWith, setFriendList }) => {
  const [bill, setBill] = useState('');
  const [youExp, setYourExp] = useState('');
  const [whoPay, setWhoPay] = useState('user');

  const friendExpense = bill - youExp;

  const handleBalance = (e) => {
    e.preventDefault();
    if (!bill || !youExp) return;

    if (whoPay === 'user') {
      setFriendList(curr => curr.map(item => item.id === shareWith.id ? { ...item, balance: shareWith.balance + friendExpense } : item));
    } else {
      setFriendList(curr => curr.map(item => item.id === shareWith.id ? { ...item, balance: shareWith.balance - youExp } : item));
    }

    setShareWith('');
  };

  return (
    <form className='form-split-bill'>
      <h2>SPLIT A BILL WITH {shareWith.name}</h2>

      <label htmlFor='bill'>💰️ Bill value</label>
      <input value={bill} onChange={(e) => setBill(Number(e.target.value))} id='bill' />

      <label htmlFor='myExpense'>🧍️ Your expense</label>
      <input value={youExp} onChange={(e) => setYourExp(Number(e.target.value) > bill ? '' : Number(e.target.value))} id='myExpense' />

      <label htmlFor='friendExpense'>🧑‍🤝‍🧑️ Friend expense</label>
      <input value={friendExpense} id='friendExpense' type='number' disabled />

      <label htmlFor='whoPay'>🤑️ Who is paying the bill?</label>
      <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)} id='whoPay'>
        <option value='user'>You</option>
        <option value='friend'>{shareWith.name}</option>
      </select>

      <Button handleShow={handleBalance}>Split Bill</Button>

    </form>
  );
};
