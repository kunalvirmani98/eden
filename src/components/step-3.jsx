import React, { useState, useEffect } from 'react';
import Header from '../common/header.jsx';
import Card from '../common/card.jsx';
import { useDispatch } from 'react-redux';
import { setUsageData } from '../slices/workspace-slice';

function Step3 (props) {
	const [ selection, setSelection ] = useState ('for-self');
	const dispatch                    = useDispatch ();

	function handleSubmit (e) {
		e.preventDefault ();

		const { currentStage } = props;

		if (!currentStage) return

		dispatch (setUsageData ({ purpose : selection }));

		props.goToStage (currentStage+1);
	}

	function handleCardSelection (e, selectedItem) {
		setSelection (selectedItem);
	}

	return (
		<div>
			<Header 
				header="How are you planning to use Eden?"
				subheader="We'll streamline your setup experience accordingly." />
			<div className="d-flex justify-content-center align-items-center">
				<div className="w-50">
					<div className="row gx-5 mb-4">
						<div className="col">
							<Card 
							uid="for-self"
							title = "For myself"
							selection = {selection}
							onClick = {handleCardSelection}
							description = "Write better. Think more clearly. Stay organized." />
						</div>
						<div className="col" >
							<Card 
							uid="with-team"
							title = "With my team"
							selection = {selection}
							onClick = {handleCardSelection}
							description = "Wikis, docs, tasks & projects, all in one place." />
						</div>
					</div>
					<button className="btn btn-primary btn-lg w-100" onClick={handleSubmit}>Create Workspace</button>
				</div>
			</div>
		</div>
		)
}

export default Step3;
