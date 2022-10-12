import React from 'react';
import './../css/contact-page.css';

function Contact() {
    return (
        <div class="main1">

            <div class="contact-container">

                <h1 id="contact-header">Contact Me</h1>
                <h4 id="contact-description">Find me on any of the following platforms:</h4>

                <div class="media-container">
                    <div class="media-label">
                        <a href="https://www.instagram.com/ronnie_beggs/">
                            <img class="contact-icon" src="./resources/images/instagram-icon.svg" alt=""></img>
                        </a>
                    </div>
                    <div class="media-label">
                        <a href="https://github.com/ronniebeggs">
                            <img class="contact-icon" src="./resources/images/github-icon.svg" alt=""></img>
                        </a>
                    </div>
                    <div class="media-label">
                        <a href="https://www.linkedin.com/in/johndenero?trk=people-guest_people_search-card">
                            <img class="contact-icon" src="./resources/images/linkedin-icon.svg" alt=""></img>
                        </a> 
                    </div>
                </div>

                <form class="email-form">
                    <label>Email:</label>
                    <input size="40"></input>
                    <button>Submit</button>

                </form>
                

            </div>
        </div>
    );
};

export default Contact