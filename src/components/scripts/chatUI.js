import React from 'react';
import '../styles/chatUI.css';

function ChatUI(props){
	return(
		<React.Fragment>
			<section id='dummy-container'>

				<section id='chat-container'>
					<div id='message-section'>
						<div className='senders-message message-container'>
							<div className='message sm'>
								<p>Hey Tanmay, OM here! what's your status ?</p>
							</div>
						</div>
						<div className='receivers-message message-container'>
							<div className='message rm'>
								<p> Hey OM, nothing much, just now completed Chat UI part.</p>
							</div>
						</div>
					</div>
					<div id='message-footer-section'>
						<input id='user-inputbar' placeholder='Input Text goes here...'></input>
						<div id='send-button'>
							<img src="./images/send.svg" alt=''></img>
						</div>
					</div>
				</section >

			</section>
		</React.Fragment>
	)
}

export default ChatUI