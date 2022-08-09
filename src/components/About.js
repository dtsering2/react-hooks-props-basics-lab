import React from "react";
import AboutMe from "./AboutMe";
function About({bio, github, linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <AboutMe bio = {bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href = {github}>{github}</a>
      <a href = {linkedin}>{linkedin}</a>
    </div>
  );
}

export default About;
