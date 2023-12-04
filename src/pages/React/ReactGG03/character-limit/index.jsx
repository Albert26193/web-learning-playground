export default function App() {
	const handleChange = (event) => {
		const text = event.target.value;
		if (text.length > 10) {
			alert("Character limit exceeded");
		}
	};

	return (
		<section>
			<h1>Character Limit</h1>
			<input
				onChange={handleChange}
				placeholder="Enter some text"
			/>
		</section>
	);
}