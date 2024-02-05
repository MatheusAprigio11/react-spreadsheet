import Spreadsheet from "react-spreadsheet";

const App = () => {
	const data = [
		[{ value: "Vanilla" }, { value: "Chocolate", readOnly: true }],
		[{ value: "Strawberry" }, { value: "Cookies", readOnly: true }],
	];
	return <Spreadsheet data={data} />;
};
export default App;
