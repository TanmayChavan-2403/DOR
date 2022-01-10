import React from 'react';
import '../styles/navbar.css'

function Navbar(props){
	return(
		<React.Fragment>
			<div id='navbar'>
				<div id='logo'>
					<img src='/images/logo.png'></img>
				</div>
				<div id='nav-links'>
					<ul id='unorderdlist'>
						<li className='nav-link'>
							<a>Vent</a>
						</li>
						<li className='nav-link'>
							<a>Talk</a>
						</li>
						<li className='nav-link'>
							<a>Write</a>
						</li>
						<li className='nav-link'>
							<a>Process</a>
						</li>
						<li className='nav-link'>
							<a>User Safety</a>
						</li>
					</ul>
				</div>
				<div id='account'>
					<button> Log In </button>
					<button> Register </button>
				</div>
			</div>	
		</React.Fragment>
	)
}

export default Navbar