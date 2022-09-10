import React from 'react';

function Header (props) {
	const { header, subheader } = props;

	return (
		<div className="text-center my-5">
			<h1 className="fw-bold">{header}</h1>
			<p className="text-secondary">{subheader}</p>
		</div>
	)
}

export default Header;
