import React from 'react';
import './../css/home-page.css';

function Home() {
    return (
        <main>
            <div class="main1">

                <div class="about-container">
                    <div class="name-image">
                        <img id="about-image" src="./resources/images/portfolio-cutout-blue.png" alt=""></img>
                    </div>

                    <div class="biography">
                        <h1 id="bio-title">Ronnie Beggs</h1>
                        <p>
                            I'm a freshman at UC Berkeley from the Bay Area. I'm 
                            studying Math and Computer Science and hope to study 
                            software engineering and AI. Outside of class, 
                            I enjoy reading, tinkering, exercising, and 
                            anything outdoors. Welcome to my portfolio!
                        </p>
                        <div class="contact-links">
                            <a href="https://www.instagram.com/ronnie_beggs/"><img class="contact-icon" src="./resources/images/instagram-icon.svg" alt=""></img></a>
                            <a href="https://github.com/ronniebeggs"><img class="contact-icon" src="./resources/images/github-icon.svg" alt=""></img></a>
                            <a href="https://www.linkedin.com/in/johndenero?trk=people-guest_people_search-card"><img class="contact-icon" src="./resources/images/linkedin-icon.svg" alt=""></img></a> 
                        </div>
                    </div>
                </div>
            </div>

            <div class="main2">

                <div class="work-container">

                    <h3 id="work-container-title">Featured Projects:</h3>

                    <div class="project-grid">
                        <img class="project-image" src="./resources/images/orbital-game-screenshot.png" alt="" width="270px" height="270px"></img>
                        <a class="project-title" href="https://github.com/ronniebeggs/Orbital-Flight-Simulator">
                            <h3>ronniebeggs<span>/</span>Orbital-Flight-Simulator</h3>
                        </a>
                        <p class="project-description">
                            Inspired by my recent high school physics class, 
                            I've created an orbital simulation game using python. 
                            I've mainly used this game as a means for applying my 
                            newly learned physics, math, and coding knowledge. 
                            I've taken a lot of inspiration from Kerbal Space Program
                            and attempted to recreate it using pygame. In the process,
                            I have learned a great deal about event loops, 
                            simulation time steps, orbital dynamics, and so much more.
                        </p>
                    </div>
                    
                    <div class="project-grid">
                    
                        <img class="project-image" src="./resoures/images/pokemon-battle-scene.jpeg" alt="" width="270px" height="270px"></img>
                        <a class="project-title" href="https://github.com/ronniebeggs/Pokemon-Terminal-Game">
                            <h3>ronniebeggs<span>/</span>Pokemon-Terminal-Game</h3>
                        </a>
                        <p class="project-description">
                            For one of my first coding projects, I attempted to 
                            replicate the game logic from the original gameboy 
                            pokemon games. Having no knowledge of a GUI, let alone
                            how to program with one, I displayed all game actions
                            using print statements within the terminal.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home