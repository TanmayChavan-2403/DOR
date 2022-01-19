import React from 'react';
import '../styles/chatUI.css';

function ChatUI(props){
	return(
		<React.Fragment>
			<div className='chatContainer' >

                <section id="chatHeader">
                    <div className="actionsContainer">

                        <p className="actionExplain">
                            If you are not connected try these
                        </p>

                        {/*<img src="./images/arrow.svg" alt="arrowIndicator" id="arrowIndicator"></img>*/}
                        <i class="fas fa-arrow-right" id="arrowIndicator"></i>

                        <ul className="actionNavlist">
                            <li className="actionNavpills" id="actionNavpill1">A1</li>
                            <li className="actionNavpills" id="actionNavpill2">A2</li>
                            <li className="actionNavpills" id="actionNavpill3">A3</li>
                            <li className="actionNavpills" id="actionNavpill4">A4</li>
                        </ul>

                    </div>
                </section>

                <section className="chatComponents" id="chatBox">
                	<section id='chat-container'>
					<div id='message-section'>
						<div className='senders-message message-container'>
							<div className='message sm'>
								<p>Receivers message ........................</p>
							</div>
						</div>
						<div className='receivers-message message-container'>
							<div className='message rm'>
								<p> Senders message ..........................</p>
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

                <section className="chatComponents" id="chatFooter">
                    <button className="chatButtons" id="chatReport">Report</button>
                    <button className="chatButtons" id="chatEnd">End Chat</button>
                </section>

            </div>
            
			{/*<section id='dummy-container'>

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

			</section>*/}
		</React.Fragment>
	)
}

export default ChatUI