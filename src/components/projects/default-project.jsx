import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Logo from "../common/logo";

import INFO from "../../data/user";
import SEO from "../../data/seo";

import "./styles/project.css";

const DefaultProject = ({title}) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
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
					</div>
					More information coming soon...
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default DefaultProject;
