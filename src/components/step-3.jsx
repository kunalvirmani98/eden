import React from 'react';
import Header from '../common/header.jsx';

function Step3 (props) {

	function handleSubmit (e) {
		e.preventDefault ();

		const { currentStage } = props;

		if (!currentStage) return

		props.goToStage (currenStage+1);
	}

	return (
		<div>
			<Header 
				header="How are you planning to use Eden?"
				subheader="We'll streamline your setup experience accordingly." />
			<div className="d-flex justify-content-center align-items-center">
				<div className="w-50">
					<div className="row">
						<div class="card col" >
							<img src="..." class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
						<div class="card col" >
							<img src="..." class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
						<button className="btn btn-primary btn-lg w-100" onClick={handleSubmit}>Create Workspace</button>
				</div>
			</div>
		</div>
	</div>
	)
}

export default Step3;
