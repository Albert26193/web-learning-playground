import './style.css';

function List() {
  const friends = [
    { id: 893, name: 'Lynn' },
    { id: 871, name: 'Alex' },
    { id: 982, name: 'Ben' },
    { id: 61, name: 'Mikenzi' }
  ];

  return (
    <ul>
      {friends.map((friend) => {
        return <li key={friend.id}>{friend.name}</li>;
      })}
    </ul>
  );
}

export default function App() {
  return <List />;
}
