import { useState } from 'react';
import { Button } from './Button';

export const AddFriendForm = ({ setFriendList, setShowAdd }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('https://i.pravatar.cc/48');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !url) return;
    setFriendList(curr => [...curr, { id: crypto.randomUUID(), name, image: url, balance: 0 }]);
    setName('');
    setShowAdd(curr => !curr);
  };

  return (
    <form className='form-add-friend' onSubmit={handleAdd}>
      <label htmlFor='friend'>🧑‍🤝‍🧑️ Friend name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} id='friend' type='text' />

      <label htmlFor='image'>🖼️ Image URL</label>
      <input value={url} onChange={(e) => setUrl(e.target.value)} id='image' type='url' />

      <Button>Add</Button>

    </form>
  );
};
