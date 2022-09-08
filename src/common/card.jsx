import React from 'react';
import teamLogo from '../assets/images/team-icon.png';

function Card (props) {
	const { title, description, onClick, uid, selection } = props;

	return (
		<div className={`card card-eden ${selection === uid ? "card-eden-selected" : "" }`} onClick={(e) => onClick (e, uid)}>
			<img src={teamLogo} className="card-img-top card-eden-logo" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
			</div>
		</div>
	)
}

export default Card;
