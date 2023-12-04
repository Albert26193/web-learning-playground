const USER_DATA = {
	name: "Ben Adam",
	img: "https://avatars.githubusercontent.com/u/6645985",
	handle: "benadam11",
};

function Badge({ user, style }) {
	return (
		<div style={style}>
			<img
				alt={user.name}
				src={user.img}
			/>
			<div>
				<h4>{user.name}</h4>
				<p>@{user.handle}</p>
			</div>
		</div>
	);
}

export default function App() {
	return (
		<Badge
			user={USER_DATA}
			style={{
				width: 300,
				margin: "0 auto",
				border: "1px solid var(--biege-10)",
				borderRadius: 8,
				backgroundColor: "var(--charcoal)",
				padding: 24,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "16px",
				textAlign: "center",
			}}
		/>
	);
}
