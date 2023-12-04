import { getIsLactoseTolerant } from './utils';
import './style.css';

function LactoseIntolerant() {
  return (
    <h1>
      <span
        role="img"
        aria-label="brocolli and strawberry"
      >
        🥦🍓
      </span>
    </h1>
  );
}

function LactoseTolerant() {
  return (
    <h1>
      <span
        role="img"
        aria-label="milk and cheese"
      >
        🥛🧀
      </span>
    </h1>
  );
}

export default function App() {
  if (getIsLactoseTolerant()) {
    return <LactoseTolerant />;
  } else {
    return <LactoseIntolerant />;
  }
}
