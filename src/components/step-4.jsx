import React, { useState, useEffect } from 'react';
import Header from '../common/header.jsx';
import doneIcon from '../assets/images/done-icon.png';
import { useSelector } from 'react-redux';

function Step4 (props) {
	const userData = useSelector ((state) => state.workspace.userData);

	function handleSubmit (e) {
		e.preventDefault ();

		console.log (userData);
		// nothing doing here
	}

	return (
		<div className="mt-5">
			<div className="d-flex align-items-center flex-column justify-content-center">
				<img src={doneIcon} alt="..." width="60" height="60" />
				<Header 
					header={`Congratulations, ${userData.displayName ?? "Eren"}!`}
					subheader="You have completed onboarding, you can start using the Eden!" />
					<button className="btn btn-primary btn-lg w-50" onClick={handleSubmit}>Launch Eden</button>
			</div>
		</div>
		)
}

export default Step4;
