function List() {
	const friends = ["Ben", "Lynn", "Alex"];

	return (
		<ul>
			{friends.map((friend, index) => {
				return <li key={index}>{friend}</li>;
			})}
		</ul>
	);
}

export default function App() {
	return <List />;
}
