import { useState } from 'react'
import { Button } from './Button';
import { FriendsList } from './FriendsList';
import { AddFriendForm } from './AddFriendForm';
import { SplitForm } from './SplitForm';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friendList, setFriendList] = useState(initialFriends)
  const [showAdd, setShowAdd] = useState(false)
  const [shareWith, setShareWith] = useState('')

  const handleSplitForm = (name) => {
    if (!shareWith) {
      setShareWith(name)
    } else {
      setShareWith('')
    }
    setShowAdd(false)
  }

  return (
    <div className="app">
      <div className='sidebar'>

        <FriendsList friendList={friendList} handleSplitForm={handleSplitForm} shareWith={shareWith} />
        {showAdd && <AddFriendForm setFriendList={setFriendList} setShowAdd={setShowAdd} />}
        <Button handleShow={() => setShowAdd(curr => !curr)}>{showAdd ? 'Close' : 'Add friend'}</Button>

      </div>
      {shareWith && <SplitForm shareWith={shareWith} setFriendList={setFriendList} setShareWith={setShareWith} />}
    </div>
  )
}