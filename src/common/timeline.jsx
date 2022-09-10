import React from 'react';
const STAGES_LIST = ['1', '2', '3', '4'];

function Timeline (props) {
	const { totalStages, stage } = props;
	let percentage = 0;

	if (stage && totalStages)
		percentage = ((stage / totalStages) * 100) 

	return (
		<div className="w-100 py-5 d-flex flex-column justify-content-center align-items-center">
			<div class="progress w-50 timeline">
				<div class="progress-bar" role="progressbar" style={{ width : `${percentage}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
				</div>
			</div>
			<div className="w-50">
				<div className="d-flex flex-row justify-content-between align-items-center">
					{ 
					STAGES_LIST && STAGES_LIST.map ((item, index) => { 
					return ( <span className={`stage ${(index + 1) <= stage ? "stage-highlight" : "" }`} >{ index+1 }</span> )
					}) 
					}
				</div>
			</div>
		</div>
	)
}

export default Timeline;
