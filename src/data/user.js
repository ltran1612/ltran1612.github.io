import logo from "../assets/logo.jpeg"
import pyLogo from "../assets/languages/python.png"
import jsLogo from "../assets/languages/javascript.png"
import tsLogo from "../assets/languages/typescript.png"
import phpLogo from "../assets/languages/php.png"
import csharpLogo from "../assets/languages/csharp.png"
import DefaultProject from "../components/projects/default-project"
import SupplyChainProject from "../pages/projects/ai-config";

const INFO = {
	main: {
		title: "Portfolio of Long Tran",
		name: "Long Tran",
		email: "longdtranw@gmail.com",
		logo: logo,
	},

	socials: {
		github: "https://github.com/ltran1612",
		linkedin: "https://www.linkedin.com/in/long-tran-9003151b2/",
	},

	homepage: {
		title: "Recent Master's Graduate in Computer Science and Full-stack Web Developer.",
		description:
			"I am a full-stack developer with expertise in React.js, Next.js, and Node.js.",
	},

	about: {
		title: "I’m Long Tran. I currently live in United States.",
		description:
			".",
	},

	projects: [
		{
			title: "Supply Chains Simulator",
			description:
				"A Python3 distributed supply chains simulator using logic programming.",
			logo: pyLogo,
			linkText: "View Project",
			link: "/projects/supply-chain-sim",
			element: SupplyChainProject, 
		},

		{
			title: "Scalable E-commerce Website Template",
			description:
				"An e-commerce website template built with Next.js, React.js, and Medusa.js.",
			logo: tsLogo,
			linkText: "View Project",
			link: "/projects/intern-project-2023",
		},
		{
			title: "A.I Conference Registration Website",
			description:
				"A registration form website for an A.I conference.",
			logo: phpLogo,
			linkText: "View Project",
			link: "/projects/conf-registration",
		},
		{
			title: "Data Visualization Admin Web Portal",
			description:
				"A web app to visualize data with on-demand automated actions to save time for a COVID-19 contact-tracing project.",
			logo: jsLogo,
			linkText: "View Project",
			link: "/projects/contact-tracing-web-portal",
		},
		{
			title: "Virtual Reality Data Coding Workspace",
			description:
				"A Virtual Reality application on the Oculus Quest platform to do data coding qualitative analysis.",
			logo: csharpLogo,
			linkText: "View Project",
			link: "/projects/vr-data-coding",
		},
	],
};

for (const project of INFO.projects) {
	if (project["element"] === undefined)
		project["element"] = DefaultProject;
}

export default INFO;
