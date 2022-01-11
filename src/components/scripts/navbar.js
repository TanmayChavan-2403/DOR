import React, {useEffect} from 'react';
import '../styles/navbar.css'

function Navbar(props){

	function toggleMenuBar(){
		let icon = document.getElementById('hamburger');
		let navbar = document.getElementById('second-navbar');

		let state = icon.getAttribute('data-state');
		if (state === 'closed'){
			navbar.style.transform = `translateX(0%)`;
			icon.setAttribute('data-state', 'open');
		} else{
			navbar.style.transform = `translateX(100%)`;
			icon.setAttribute('data-state', 'closed');
		}
	}

	function monitorScrollbar(){
		let position = window.pageYOffset;
		let navbar = document.getElementById('navbar');
		
		// Logic to check the scrollbar position, if it is greater than or equal to 110 then I have to add background to navbar.
		if (position >= 110){
			navbar.style.background = 'rgb(255, 206, 149)';
		} else {
			navbar.style.background = 'transparent';
		}
	}

	// Added onscroll subscription to monitor scrollbar positions
	useEffect(() => {
		window.addEventListener('scroll', monitorScrollbar);
	})

	return(
		<React.Fragment>
			<div id='navbar'>
				<div id='logo'>
					<img src='/images/logo.png'></img>
				</div>
				<div id='nav-links'>
					<ul id='unorderdlist'>
						<li className='nav-link'>
							<a href='#'>Vent</a>
						</li>
						<li className='nav-link'>
							<a href='#'>Talk</a>
						</li>
						<li className='nav-link'>
							<a href='#'>Write</a>
						</li>
						<li className='nav-link'>
							<a href='#'>Process</a>
						</li>
						<li className='nav-link'>
							<a href='#'>User Safety</a>
						</li>
					</ul>
				</div>
				<div id='account'>
					<button> Log In </button>
					<button> Register </button>
					<i class="fas fa-bars" id='hamburger' onClick={toggleMenuBar} data-state='closed'></i>
				</div>

			</div>	
			<div id='second-navbar'>
				<div id='sn-header'>
					<div id='close-icon-container'>
						<i class="fas fa-times" id='close-icon' onClick={toggleMenuBar}></i>
					</div>
					<div id='company-logo'>
						<img src='./images/logo.png'></img>
					</div>
				</div>
				<div id='sn-menubar'>
					<ul id='sn-unorderdlist'>
						<li className='sn-nav-link'>
							<a>Vent</a>
						</li>
						<li className='sn-nav-link'>
							<a>Talk</a>
						</li>
						<li className='sn-nav-link'>
							<a>Write</a>
						</li>
						<li className='sn-nav-link'>
							<a>Process</a>
						</li>
						<li className='sn-nav-link'>
							<a>User Safety</a>
						</li>
						<li className='sn-nav-link'>
							<button> Log In </button>
						</li>
						<li className='sn-nav-link'>
							<button> Register </button>
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Navbar