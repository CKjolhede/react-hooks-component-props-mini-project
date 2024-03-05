import React from "react";
import App from "./App";
import logo from "../assets/logo"


const About = ({img, about}) => {
	return (
		<aside className="aside img">
			<img src = {logo}  alt="blog logo" />
			<p >`About this blog ${about}`</p>
		</aside>
	);
}

export default About;
