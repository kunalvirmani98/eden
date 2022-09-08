import React from 'react';
import Header from '../common/header.jsx';

function Step1 (props) {

	function handleSubmit (e) {
		e.preventDefault ();

		const { currentStage } = props;

		if (!currentStage) return

		props.goToStage (currentStage + 1);
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
							<input className="form-control form-control-lg" id="fullname" type="text" placeholder="Steve Jobs" />
						</div>
						<div className="mb-3">
							<label for="displayname" className="form-label text-start">Display Name</label>
							<input className="form-control form-control-lg" id="displayname" type="text" placeholder="Steve" />
						</div>
						<button type="submit" className="btn btn-primary btn-lg w-100" onClick={(e) => handleSubmit (e) }>Create Workspace</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Step1;
