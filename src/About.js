import React from "react";

function About() {
    return(
        <div>
            <h4 className="about-blurb">
                I'm a software engineer with a background in visual arts and literature. As a freelance illustrator,
                I've always had an interest in image and text through my art. Through coding, I'm able to converge
                my passions for language and design to positively impact others. As a sortware engineer, 
                I strive to be the connection between the technical world of coding and the visual aesthetics of fine 
                art to create functional yet visually stunning projects. I'm a graduate of the Flatiron School where I 
                spent 10 months refining my skills as a full stack developer. I am eager to find my place on a 
                collaborative team of talented individuals where I can continue expanding my knowledge and developing new skills.
                When I'm not coding new projects, you can find me working on my art, digging through crates at a record store, or 
                exploring the neighborhood with my dog Fletcher.
           </h4>
           <div>
           <img src={require("./images/computers.jpg")} id="computer" alt="computer illustration with colors coming out of the monitor"/>
           </div>
           

        </div>
        
    )
}
export default About;