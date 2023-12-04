function Badge({ name, img, handle, children }) {
	return (
		<div className="badge">
			<img
				alt={`Avatar for ${name}`}
				src={img}
			/>
			<header>
				<h4>{name}</h4>
				<h6>@{handle}</h6>
			</header>
			{children}
		</div>
	);
}

export default function App() {
	const handleAddFriend = () => alert("Added");

	return (
		<Badge
			name="Alex Brown"
			handle="alexbrown40"
			img="https://avatars.githubusercontent.com/u/67877015"
		>
			<p>Alex enjoys running, surfing, and binge watching the Twilight series.</p>
			<button onClick={handleAddFriend}>Add Friend</button>
		</Badge>
	);
}
