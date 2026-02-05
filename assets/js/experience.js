const experiences = {
	rocketride: {
		company: "RocketRide AI Inc.",
		title: "Developer Relations Engineer",
		location: "San Francisco, CA",
		period: "2026 - Current",
		description:
			"Leading developer-facing initiatives to drive adoption of RocketRide's AI pipeline platform, focused on making it easier and more cost-effective to build and deploy production-ready AI products. Working hands-on with the platform to design sample applications, reference architectures, and end-to-end use cases spanning data ingestion, transformation, embedding generation, and deployment. Serving as the bridge between engineering, product, and the developer community by translating complex technical concepts into clear documentation, presentations, and educational content for both technical and non-technical audiences.",
		highlights: [
			"Design sample applications and reference architectures demonstrating real-world AI workflows",
			"Translate complex platform concepts into clear documentation, tutorials, and presentations",
			"Collaborate with engineering teams to surface developer feedback, identify usability gaps, and influence product direction",
			"Support developers through workshops, demos, and direct engagement with emphasis on data privacy and responsible deployment",
			"Contribute to improving developer experience, accelerating onboarding, and positioning the platform as developer-first",
		],
		technologies: [
			"Python",
			"TypeScript",
			"Node.js",
			"AI/ML",
			"Docker",
			"REST API",
		],
		projects: [],
	},
	aparavi: {
		company: "Aparavi Software AG",
		title: "Software Engineer",
		location: "Santa Monica, CA",
		period: "2022 - 2026",
		description:
			"Led major initiatives to design and ship new features for the data intelligence automation platform using Node.js, SQL databases, and React.js. Worked closely with product managers, designers, and engineers to ensure features met customer needs. Helped improve team process and workflow by identifying bottlenecks and proposing solutions to increase efficiency. Contributed to the development of data management and protection solutions helping organizations worldwide optimize and safeguard their data.",
		highlights: [
			"Designed and implemented new platform features end-to-end across the full stack",
			"Collaborated cross-functionally with product, design, and engineering to deliver customer-driven features",
			"Identified process improvements and proposed workflow changes to increase team productivity",
			"Managed tasks independently using Agile methodologies, delivering on time and within scope",
			"Built solutions for data classification, protection, and compliance at enterprise scale",
		],
		technologies: [
			"Node.js",
			"React",
			"SQL",
			"AWS",
			"TypeScript",
			"Agile",
		],
		projects: [
			{
				name: "Aparavi",
				description: "Data intelligence automation platform",
				tech: ["Node", "React", "SQL", "AWS"],
				image: "./assets/img/portfolio/aparavi.png",
				link: "https://www.aparavi.com/",
			},
		],
	},
	hotb: {
		company: "HOTB Software",
		title: "Software Engineer",
		location: "Irvine, CA",
		period: "2020 - 2022",
		description:
			"Built enterprise-grade full-stack software using Linux, Node.js, MSSQL, ArangoDB, PostgreSQL, React, and AWS. Developed internal systems for order entry and management, conversion and revenue reporting, and production workflow tracking. Designed custom REST APIs in Node.js and managed Linux server deployments with Docker and AWS. Led development of a government assistance application facilitating COVID-19 financial relief with transactions up to $15,000 per household.",
		highlights: [
			"Built order management, revenue reporting, and production tracking systems used across departments",
			"Designed and implemented custom REST APIs in Node.js for internal and external integrations",
			"Deployed and maintained Linux servers and virtualized environments using Docker and AWS",
			"Developed a government COVID-19 financial assistance platform handling transactions up to $15,000 per household",
		],
		technologies: [
			"Node.js",
			"React",
			"MSSQL",
			"PostgreSQL",
			"ArangoDB",
			"AWS",
			"Docker",
			"Linux",
			"Knex.js",
		],
		projects: [
			{
				name: "Georgia Rental Assistance",
				description: "Government assistance platform",
				tech: ["Node", "React", "SQL", "AWS"],
				image: "./assets/img/portfolio/ga-era.png",
				link: "https://georgiarentalassistance.ga.gov/",
			},
			{
				name: "CoreCompli",
				description: "Compliance platform",
				tech: ["Node", "SQL", "AWS"],
				image: "./assets/img/portfolio/corecompli.png",
				link: "https://hotbsoftware.com/corecompli/",
			},
		],
	},
	nihonkohden: {
		company: "Nihon Kohden",
		title: "Software Engineer",
		location: "Irvine, CA",
		period: "2020 - 2021",
		description:
			"Architected and implemented data streaming APIs to receive continuous data flows from medical monitoring equipment, storing results in Microsoft SQL for further analysis. Built Node.js APIs to query and serve data to frontend applications, and designed Vue-based interfaces for displaying real-time data streams. Assisted with building infrastructure for a data warehouse implementation and participated in daily Scrum meetings for project coordination and troubleshooting.",
		highlights: [
			"Architected streaming APIs for continuous ingestion of medical monitoring data into MSSQL",
			"Built Node.js APIs to query and deliver data to frontend applications",
			"Designed and developed Vue.js frontend for real-time medical data visualization",
			"Assisted with data warehouse infrastructure planning and implementation",
			"Participated in daily Scrum meetings for project analysis and blocker resolution",
		],
		technologies: [
			"Node.js",
			"Vue.js",
			"MSSQL",
			"REST API",
			"Data Streaming",
		],
		projects: [
			{
				name: "NK Lab",
				description: "Medical data waveform visualization",
				tech: ["Node", "Vue", "SQL"],
				image: "./assets/img/portfolio/nk-lab.png",
				link: "https://www.nkdhs.com/products.pl?waveform=true",
			},
		],
	},
	roguecloud: {
		company: "Rogue Cloud",
		title: "Software Engineer",
		location: "San Juan Capistrano, CA",
		period: "2019",
		description:
			"Automated business processes for enterprise clients using the Salesforce cloud platform. Developed enterprise-grade software to improve operational agility in competitive markets. Provided training to junior engineers on programming concepts and mentored student interns on career development. Facilitated daily Scrum meetings to analyze project status, troubleshoot issues, and coordinate directly with the development team across all project phases.",
		highlights: [
			"Automated business processes for corporations using the Salesforce cloud platform",
			"Developed enterprise-grade software to enhance operational agility for clients",
			"Trained junior engineers on programming concepts and mentored interns on career progression",
			"Facilitated daily Scrum meetings and coordinated with the development team across all project phases",
		],
		technologies: [
			"Salesforce",
			"Apex",
			"Lightning",
			"JavaScript",
			"Scrum",
		],
		projects: [],
	},
	appmakersla: {
		company: "AppMakersLA",
		title: "Project Manager Intern",
		location: "Los Angeles, CA",
		period: "2016",
		description:
			"Provided hands-on support in the facilitation of full-stack application development. Monitored project progress and maintained workflow by assigning tasks to developers. Actively participated in client meetings to discuss application requirements, review progress, and gather feedback.",
		highlights: [
			"Assisted with facilitation and coordination of full-stack application development",
			"Monitored project progress, maintained workflow, and assigned tasks to developers",
			"Participated in client meetings to discuss requirements and review application progress",
		],
		technologies: [
			"JavaScript",
			"HTML/CSS",
			"Project Management",
			"Agile",
		],
		projects: [],
	},
};

function renderExperience() {
	const params = new URLSearchParams(window.location.search);
	const slug = params.get("company");

	if (!slug || !experiences[slug]) {
		document.querySelector(".detail-main").style.display = "none";
		document.getElementById("fallbackMessage").style.display = "flex";
		document.querySelector(".detail-header").style.display = "none";
		return;
	}

	const exp = experiences[slug];

	document.title = exp.company + " — Joshua D. Phillips";
	document.getElementById("companyName").textContent = exp.company;
	document.getElementById("companyMeta").textContent =
		exp.title + " \u00B7 " + exp.location + " \u00B7 " + exp.period;
	document.getElementById("companyDescription").textContent = exp.description;

	// Highlights
	const highlightsList = document.getElementById("highlights");
	exp.highlights.forEach(function (item) {
		const li = document.createElement("li");
		li.textContent = item;
		highlightsList.appendChild(li);
	});

	// Tech tags
	const techContainer = document.getElementById("techTags");
	exp.technologies.forEach(function (tech) {
		const span = document.createElement("span");
		span.textContent = tech;
		techContainer.appendChild(span);
	});

	// Projects
	const projectGrid = document.getElementById("projectGrid");
	if (exp.projects && exp.projects.length > 0) {
		exp.projects.forEach(function (project) {
			var card = document.createElement("div");
			card.className = "project-card";

			var a = document.createElement("a");
			if (project.link) {
				a.href = project.link;
				a.target = "_blank";
			}

			var imgWrap = document.createElement("div");
			imgWrap.className = "img-wrap";
			if (project.image) {
				var img = document.createElement("img");
				img.src = project.image;
				img.alt = project.name;
				imgWrap.appendChild(img);
			}
			a.appendChild(imgWrap);

			var body = document.createElement("div");
			body.className = "card-body";

			var h3 = document.createElement("h3");
			h3.textContent = project.name;
			body.appendChild(h3);

			var p = document.createElement("p");
			p.textContent = project.description;
			body.appendChild(p);

			if (project.tech && project.tech.length > 0) {
				var tags = document.createElement("div");
				tags.className = "project-tags";
				project.tech.forEach(function (t) {
					var span = document.createElement("span");
					span.textContent = t;
					tags.appendChild(span);
				});
				body.appendChild(tags);
			}

			a.appendChild(body);
			card.appendChild(a);
			projectGrid.appendChild(card);
		});
	} else {
		document.getElementById("projectsSection").style.display = "none";
	}
}

document.addEventListener("DOMContentLoaded", renderExperience);
