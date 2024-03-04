import React from "react";
import App from "./App";


const About = ({img, about}) => {
	return (
		<aside className="aside img">
			<img src = { img } alt="blog logo" />
			<p>{about}</p>
		</aside>
	);
}

export default About;
