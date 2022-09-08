import React from 'react';
import edenLogo from '../assets/images/eden-logo.png'; 

function AppName (props) {

	return (
		<div className="d-flex justify-content-center align-items-center mb-5">
			<img src={edenLogo} width="27" height="27" alt="..."/>
			<h2 className="text-center fw-bold mb-0 ms-2">Eden</h2>
		</div>
	)
}

export default AppName;
