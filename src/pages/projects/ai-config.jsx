import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";
import Logo from "../../components/common/logo";

import SEO from "../../data/seo";
import diagram from "../../assets/projects/system.jpg"; 
import {
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "../../components/projects/styles/project.css";

const Project = (data) => {
	const {title} = data;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							{title}
						</div>
						<div className="project-description">
							<h1>Description</h1>
							A distributed supply chain simulators built with Python3 and logic programming. 

							In general, this is a simulator where users will describe the target supply chain declaratively using logic programming.
							<br/>
							This means we will describe the properties, the actors, their actions, the actions' preconditions, and postconditions.  

							Then, based on the description, the system will simulates the actors in the supply chain to see how contracts are satisfied (or not) overtime.  

							<h1>Architecture</h1>
								Each actor is simulated distributedly in conjunction with the simulation of the environment to which the actors belong.
								<br/>
								The simulation is run overtime. At each time step, the environment sends the relevant information about the world to each actor. 
								<br/>
								Then, each actor plans and executes an action that affects the environment. Specifically, each actor will send the action that it wants to execute to the environment, and the environment will calculate the changes caused by the actions.  
								<br/>
								In other words, there is 1 environment process running in parallel to 1 or more actor (agent) processes. 
								<br/>
								<br/>
								The communication between an actor process and the environment process is handled by the pub/sub architecture. 
								<label></label>
								<img src={diagram} alt="Diagram representing the communication model of the system."/>
							<br/>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
