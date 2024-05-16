import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import "./styles/works.css";
import twenty7Global from "../../assets/companies/27global.png"; 
import nmsu from "../../assets/companies/nmsu.png"; 
import kr from "../../assets/companies/krlogo.png"; 

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={nmsu}
								alt="nmsu"
								className="work-image"
							/>
							<div className="work-title">New Mexico State University</div>
							<div className="work-subtitle">
								Teaching Assistant
							</div>
							<div className="work-duration">August 2022 - May 2024</div>
						</div>

						<div className="work">
							<img
								src={twenty7Global}
								alt="27global"
								className="work-image"
							/>
							<div className="work-title">27Global</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">May 2023 - August 2023</div>
						</div>

						<div className="work">
							<img
								src={kr}
								alt="kr"
								className="work-image"
								style={{"background-color": "rgb(113, 106, 148)"}}
							/>
							<div className="work-title">Knowledge Representation Conference 2021</div>
							<div className="work-subtitle">
								Web Software Developer
							</div>
							<div className="work-duration">July 2021 - Sept 2021</div>
						</div>

						<div className="work">
							<img
								src={nmsu}
								alt="nmsu"
								className="work-image"
							/>
							<div className="work-title">New Mexico State University</div>
							<div className="work-subtitle">
								Student Software Developer
							</div>
							<div className="work-duration">July 2020 - June 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
