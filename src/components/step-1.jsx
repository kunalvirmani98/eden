import React, { useState } from 'react';
import Header from '../common/header.jsx';

function Step1 (props) {

	const [ fullName, setFullName ]             = useState ('');
	const [ errFullName, setErrFullName ]       = useState ('');
	const [ displayName, setDisplayName ]       = useState ('');
	const [ errDisplayName, setErrDisplayName ] = useState ('');
	const [ isValidated, setIsValidated ]       = useState (false);

	function handleSubmit (e) {
		e.preventDefault ();

		const { currentStage } = props;

		if (!currentStage) return

		props.goToStage (currentStage + 1);
	}

	function onChangeHandler (e, type) {
		if (!type) return;

		if (type === 'fullName') {
			setFullName (e.target.value);
		}

		if (type === 'displayName') {
			setDisplayName (e.target.value);
		}

		checkValidation ()
	}

	function checkValidation () {
		if (!fullName) {
			setErrFullName ('Fullname cannot be empty');
			setIsValidated (false)
		}

		if (!displayName) {
			setErrDisplayName ('Display name cannot be empty');
			setIsValidated (false)
		}
	}

	return (
		<div>
			<Header 
				header="Welcome! First things first..."
				subheader="You can always change them later." />
			<div className="d-flex justify-content-center align-items-center">
				<div className="w-50">
					<form>
						<div className="mb-3">
							<label for="fullname" className="form-label text-start">Full Name</label>
							<input className="form-control form-control-lg" id="fullname" type="text" placeholder="Steve Jobs" onChange={(e) => onChangeHandler (e, 'fullname')}/>
						</div>
						<div className="mb-3">
							<label for="displayname" className="form-label text-start">Display Name</label>
							<input className="form-control form-control-lg" id="displayname" type="text" placeholder="Steve" onChange={(e) => onChangeHandler (e, 'displayname')}/>
						</div>
						<button type="submit" className={`btn btn-primary btn-lg w-100 ${isValidated ? "" : "disabled" }`} onClick={(e) => handleSubmit (e) }>Create Workspace</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Step1;
