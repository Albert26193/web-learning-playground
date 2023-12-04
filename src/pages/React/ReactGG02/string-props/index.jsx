function Badge({ name, handle, img }) {
	return (
		<div className="badge">
			<img
				alt={name}
				src={img}
			/>
			<div>
				<h4>{name}</h4>
				<p>@{handle}</p>
			</div>
		</div>
	);
}

export default function App() {
	return (
		<Badge
			name="Tyler McGinnis"
			handle="tylermcginnis"
			img="https://avatars0.githubusercontent.com/u/2933430"
		/>
	);
}
