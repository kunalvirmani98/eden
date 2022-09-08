import { React, useEffect, useState } from 'react';
import Header from './common/header.jsx';
import AppName from './common/app-name.jsx';
import Step1   from './components/step-1.jsx';
import Step2   from './components/step-2.jsx';
import Step3   from './components/step-3.jsx';
import Step4   from './components/step-4.jsx';
import Timeline from './common/timeline.jsx';
import './styles/app.scss';

function App () {
	const [ stage, setStage ] = useState (1);
	let Component;

	function goToStage (stageNumber) {
		if (!stageNumber) {
			console.error ('Stage Number undefined');
			return;
		}

		setStage (stageNumber);
	}

	switch (stage) {
		case 1 :
			Component = Step1;
			break;

		case 2 :
			Component = Step2;
			break;

		case 3 :
			Component = Step3;
			break;
			
		case 4 :
			Component = Step4;
			break;

		default : 
			console.error ('Unknown Stage! Aborting ...');
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-xs-0 col-md-2 col-xl-3" />
				<div className="col-xs-12 col-md-8 col-xl-6 d-flex justify-content-center align-items-center vh-100">
					<div className="main-content">
						<AppName name="eden" />
						<Timeline totalStages={4} stage={stage} />
						<Component goToStage={goToStage} currentStage={stage}/>
					</div>
				</div>
				<div className="col-xs-0 col-md-2 col-xl-3" />
			</div>
		</div>
		);
}

export default App;
