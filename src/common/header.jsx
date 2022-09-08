import React from 'react';

function Header (props) {
	const { header, subheader } = props;

	return (
		<div className="text-center my-5">
			<h1>{header}</h1>
			<p>{subheader}</p>
		</div>
	)
}

export default Header;
