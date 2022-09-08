import React, { useState, useEffect } from 'react';
import Header from '../common/header.jsx';
import doneIcon from '../assets/images/done-icon.png';

function Step3 (props) {

	function handleSubmit (e) {
		e.preventDefault ();

		// nothing doing here
	}

	return (
		<div className="mt-5">
			<div className="d-flex align-items-center flex-column justify-content-center">
				<img src={doneIcon} alt="..." width="60" height="60" />
				<Header 
					header="Congratulations, Eren!"
					subheader="You have completed onboarding, you can start using the Eden!" />
					<button className="btn btn-primary btn-lg w-50" onClick={handleSubmit}>Launch Eden</button>
			</div>
		</div>
		)
}

export default Step3;
