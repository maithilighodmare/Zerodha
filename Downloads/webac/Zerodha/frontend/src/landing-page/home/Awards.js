import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
               <div className='col-6 p-5'>
                 <img src='media/images/assets/largestBroker.svg'></img>
               </div>
               <div className='col-6 p-5 mt-5'>
               <h1>Largest stock broker in India</h1>
               <p className='md-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in</p>
                 <div className='row'>
                    <div className='col-6'>
                    <ul>
                        <li>Futures and Options</li>
                        <li>Comodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                        <li>Stocks & IPOs</li>
                        <li>Direct Mutual Funds</li>
                        <li>Bonds and Govt. Securities</li>
                    </ul>
                    </div>
                   
                 </div>
                  <img src='media\images\assets\pressLogos.png' style={{width:"90%"}}/>
               </div>
            </div>
            
        </div>
    );
}

export default Awards;