export const getTodaysDate = () => {
	const today = new Date();
	const day = today.getDate();
	const month = today.getMonth();
	const year = today.getFullYear();
	return `${month}/${day}/${year}`;
};
