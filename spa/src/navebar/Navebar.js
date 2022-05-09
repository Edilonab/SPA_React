import React from 'react';
import Devj from './dev.svg';
 
  
export default function Nave() {
    return (
        <><nav class="nav">
                <div class="container">
                    < >
                        <img src={Devj} alt = 'logo'/>
                    </>

                    <div class="main_list" id="mainListDiv">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">my work</a></li>
                            <li><a href="#">disegn</a></li>
                            <li><a href="#">dcontact</a></li>
                        </ul>
                    </div>
                    <div class="media_button">
                        <button class="main_media_button" id="mediaButton">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        <section class="home"></section></>
    );  
}
