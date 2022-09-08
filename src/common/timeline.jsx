import React from 'react';
const STAGES_LIST = ['1', '2', '3', '4'];

function Timeline (props) {
	const { totalStages, stage } = props;

	return (
		<div className="w-100 py-5 d-flex justify-content-center align-items-center">
			<div className="timeline w-50 d-flex justify-content-between align-items-center">
				{ 
					STAGES_LIST && STAGES_LIST.map ((item, index) => { 
						return ( <span className={`stage ${(index + 1) <= stage ? "stage-highlight" : "" }`} >{ index+1 }</span> )
					}) 
				}
			</div>
		</div>
	)
}

export default Timeline;
