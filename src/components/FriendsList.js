import { Friend } from './Friend';

export const FriendsList = ({ friendList, handleSplitForm, shareWith }) => {
  return (
    <ul>
      {friendList.map(friend => (
        <Friend key={friend.id} friend={friend} handleSplitForm={handleSplitForm} shareWith={shareWith} />
      ))}
    </ul>
  );
};
