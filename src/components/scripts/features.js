import React, {useState, useEffect} from 'react';
import '../styles/features.css'

function Features(props){


	function startCarousel(){
		let container = document.getElementById('f-carousel-container');
		let currState = 0;
		let direction = 'forward';
		
		setInterval(()=>{
			if (direction == 'forward'){
				currState += 25
				container.style.left = `-${currState}%`;
			} else{
				// Code to slide the container in backwards direction
				currState -= 25
				container.style.left = `-${currState}%`;
			}
			console.log(currState, direction);

			// If currstate value is equal to 100 means we have reached to the last slide of our container, now we will move backward
			// so when we change direction to backward above code will move the container in backward direction
			if(currState == 100){
				direction = 'backward';
			}
			if (currState == 0){
				direction = 'forward';
			}
		}, 4000)
	}

	// Setting subscription for carousel
	useEffect(() => {
		window.onload = startCarousel
	},false)

	let [features, changeFeatures] = useState(['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6', 'Feature 7', 'Feature 8'])

	return(
		<React.Fragment>
			<secion id='features'>
				<div id='f-heading1'>
					<h1> Something about having nice features</h1>
				</div>
				<div id='f-heading2'>
					<p>Some inspirational subtext which might not be read, but it does look good here, doesn’t it?</p>
				</div>
				<div id='f-carousel'>

					<section id='f-carousel-container'>
						{features.map(feature => {
								return(
									<div className='feature-container'>
										<div className='fc-icon'>
											<img src='./images/bag.svg'></img>
										</div>
										<div className='feature-name'>
											<h2>{feature}</h2>
										</div>
										<div className='feature-details'>
											At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed
										</div>
										<div className='feature-discover'>
											<h3>Discover</h3>
										</div>
									</div>
								)
						})}
					</section>

				</div>
			</secion>
		</React.Fragment>
	)

}

export default Features;