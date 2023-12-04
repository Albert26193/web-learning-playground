function Input({ characterLimit }) {
	const handleChange = (event) => {
		if (event.target.value.length > characterLimit) {
			alert("Character limit exceeded");
		}
	};

	return (
		<input
			onChange={handleChange}
			placeholder="Enter some text"
		/>
	);
}

export default function App() {
	return (
		<section>
			<h1>Character Limit</h1>
			<Input characterLimit={20} />
		</section>
	);
}
