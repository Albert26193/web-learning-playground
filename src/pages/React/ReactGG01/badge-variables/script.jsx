import './style.css';

function Badge() {
  const name = 'Tyler McGinnis';
  const handle = 'tylermcginnis';
  const img = 'https://avatars0.githubusercontent.com/u/2933430';

  return (
    <div className="badge">
      <img
        alt={`${name}`}
        src={`${img}`}
      />
      <div>
        <h4>{name}</h4>
        <p>{handle}</p>
      </div>
    </div>
  );
}

export default function App() {
  return <Badge />;
}
