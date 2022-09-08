import React from 'react';

function AppName (props) {
	const { name } = props;

	return (
		<div>
			<h2 className="text-center mb-5">{name}</h2>
		</div>
	)
}

export default AppName;
