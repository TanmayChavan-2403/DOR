import React from 'react';
import '../styles/banner.css'

function Banner(props){
	return(
		<React.Fragment>
			<div id='banner'>
				<div id='amoeba'>
					<img src='./images/amoeba.png'></img>
				</div>
				<div id='crowd'>
					<img src='./images/crowd.svg'></img>
				</div>
				<h1>TheDorProject.</h1>
				<h1><span id='headline'>TheDor</span><br/>Project.</h1>
			</div>
		</React.Fragment>
	)
}

export default Banner;