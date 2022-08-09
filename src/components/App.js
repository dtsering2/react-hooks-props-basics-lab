import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
let {name, city, bio, color, links} = user
let{github, linkedin} = links
console.log({github})

function App() {
  return (
    <div>
      <NavBar />
      <Home name = {name} city = {city} color = {color}/>
      <About bio = {bio} github = {github} linkedin = {linkedin}/>
    </div>
  );
}

export default App;
