import React from "react";

function About() {
    return(
        <div>
            <h4 className="about-blurb">
                I'm a software engineer with a background in visual arts and literature. As a freelance illustrator,
                I've always had an interest in image and text through my art. Through coding, I'm able to converge
                my passions for language and design to positively impact others. As a sortware engineer, 
                I strive to be the connection between the technical world of coding and the visual aesthetics of fine 
                art to create functional yet visually stunning projects.
           </h4>
           <img src={require("./images/computers.jpg")} id="computer" alt="computer illustration with colors coming out of the monitor"/>

        </div>
        
    )
}
export default About;