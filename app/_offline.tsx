interface _offlineProps {}

function _offline({}: _offlineProps) {
	return (
		<div>
			<h1>Here is a fallback page.</h1>
			<p>Connect the internet for using this app</p>
		</div>
	);
}

export default _offline;
