import { getTodaysDate } from "./utils";

function Today() {
	return <p>Today is {getTodaysDate()}</p>;
}

export default function App() {
	return <Today />;
}
