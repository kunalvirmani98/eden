import React from 'react';
import Header from '../common/header.jsx';

function Step2 (props) {

	function handleSubmit (e) {
		e.preventDefault ();
		
		const { currentStage } = props;

		if (!currentStage) return

		props.goToStage (currentStage + 1);
	}

	return (
		<div>
			<Header 
				header="Let's set up a home for all your work"
				subheader="You can always create another workspace later" />
			<div className="d-flex justify-content-center align-items-center">
				<div className="w-50">
					<form>
						<div className="mb-3">
							<label for="workspacename" className="form-label text-start">Workspace Name</label>
							<input className="form-control form-control-lg" id="workspacename" type="text" placeholder="Eden" />
						</div>
						<div className="mb-3">
							<label for="workspaceurl" className="form-label text-start">
								Workspace URL 
								<span className="text-secondary">(optional)</span>
							</label>
							<div className="input-group mb-3">
								<span className="input-group-text" id="workspaceurl">www.eden.com/</span>
								<input type="text" className="form-control" id="workspaceurl" placeholder="Example"/>
							</div>
						</div>
						<button type="submit" className="btn btn-primary btn-lg w-100" onClick={handleSubmit}>Create Workspace</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Step2;
