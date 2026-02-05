const experiences = {
	rocketride: {
		company: "RocketRide AI Inc.",
		title: "Developer Relations Engineer",
		location: "San Francisco",
		period: "2026 - Current",
		description:
			"Lead developer-facing initiatives to support adoption of RocketRide's AI pipeline platform. Design sample applications, reference architectures, and end-to-end use cases demonstrating real-world AI workflows. Create technical content including tutorials, blog posts, and documentation to help developers integrate AI capabilities into their products.",
		highlights: [
			"Designed and built sample applications showcasing AI pipeline integrations",
			"Created technical documentation and developer guides for platform onboarding",
			"Presented at developer conferences and meetups on AI workflow best practices",
			"Collaborated with engineering teams to improve developer experience and API design",
		],
		technologies: [
			"Python",
			"TypeScript",
			"React",
			"Node.js",
			"AI/ML",
			"Docker",
			"Kubernetes",
		],
		projects: [
			{
				name: "AI Pipeline Starter Kit",
				description:
					"Reference implementation for building end-to-end AI pipelines with RocketRide's platform.",
				tech: ["Python", "Docker", "REST API"],
			},
			{
				name: "Developer Portal",
				description:
					"Interactive documentation site with live code examples and API explorer.",
				tech: ["React", "TypeScript", "MDX"],
			},
		],
	},
	aparavi: {
		company: "Aparavi Software AG",
		title: "Software Engineer",
		location: "Santa Monica",
		period: "2022 - 2026",
		description:
			"Led major initiatives to introduce new features to the data intelligence automation platform using Node.js, SQL databases, and React.js. Delivered innovative data management and protection solutions for enterprise clients, working across the full stack to build scalable, reliable systems.",
		highlights: [
			"Led development of new platform features for data classification and policy automation",
			"Built and maintained RESTful APIs serving enterprise-scale data workloads",
			"Implemented real-time data monitoring dashboards using React and WebSockets",
			"Collaborated with cross-functional teams to deliver quarterly product releases",
		],
		technologies: [
			"Node.js",
			"React",
			"SQL",
			"AWS",
			"TypeScript",
			"PostgreSQL",
			"Redis",
		],
		projects: [
			{
				name: "Data Classification Engine",
				description:
					"Automated data classification system for enterprise compliance and governance.",
				tech: ["Node.js", "SQL", "AWS"],
			},
			{
				name: "Policy Automation Dashboard",
				description:
					"Real-time dashboard for monitoring and managing data protection policies.",
				tech: ["React", "TypeScript", "WebSocket"],
			},
		],
	},
	hotb: {
		company: "HOTB Software",
		title: "Software Engineer",
		location: "Irvine",
		period: "2020 - 2022",
		description:
			"Developed enterprise-grade software using Node.js, MSSQL, PostgreSQL, React, and AWS. Built internal systems for order management, revenue reporting, and production workflow tracking that streamlined operations across multiple departments.",
		highlights: [
			"Built order management system handling thousands of daily transactions",
			"Developed revenue reporting tools used by finance and executive teams",
			"Created production workflow tracking system to improve manufacturing efficiency",
			"Designed and implemented RESTful APIs integrated with third-party services",
		],
		technologies: [
			"Node.js",
			"React",
			"MSSQL",
			"PostgreSQL",
			"AWS",
			"Express",
		],
		projects: [
			{
				name: "Order Management System",
				description:
					"Internal system for tracking and managing customer orders from intake to fulfillment.",
				tech: ["Node.js", "MSSQL", "React"],
			},
			{
				name: "Revenue Reporting Portal",
				description:
					"Financial reporting dashboard with automated data aggregation and visualization.",
				tech: ["React", "PostgreSQL", "AWS"],
			},
		],
	},
	nihonkohden: {
		company: "Nihon Kohden",
		title: "Software Engineer",
		location: "Irvine",
		period: "2020 - 2021",
		description:
			"Architected data streaming APIs to receive medical monitoring data stored in MSSQL. Built frontend applications using Vue to display real-time data streams from patient monitoring devices, contributing to healthcare technology that supports critical care environments.",
		highlights: [
			"Architected real-time data streaming APIs for medical device integration",
			"Built Vue.js frontend for visualizing patient monitoring waveforms",
			"Designed database schema for high-frequency medical telemetry data",
			"Ensured HIPAA compliance across all data handling processes",
		],
		technologies: ["Node.js", "Vue.js", "MSSQL", "REST API", "WebSocket"],
		projects: [
			{
				name: "Waveform Visualization",
				description:
					"Real-time medical waveform display application for patient monitoring data.",
				tech: ["Vue.js", "WebSocket", "Canvas API"],
			},
			{
				name: "Telemetry Data API",
				description:
					"Streaming API for ingesting and serving medical monitoring device data.",
				tech: ["Node.js", "MSSQL", "REST"],
			},
		],
	},
	roguecloud: {
		company: "Rogue Cloud",
		title: "Software Engineer",
		location: "San Juan Capistrano",
		period: "2019",
		description:
			"Automated business processes using the Salesforce cloud platform. Developed enterprise-grade software solutions and provided training and mentorship to junior engineers and interns, helping grow the engineering team's capabilities.",
		highlights: [
			"Automated business processes using Salesforce Apex and Lightning components",
			"Developed custom integrations between Salesforce and third-party systems",
			"Mentored junior engineers and interns on best practices and code quality",
			"Participated in client-facing technical discussions and solution design",
		],
		technologies: [
			"Salesforce",
			"Apex",
			"Lightning",
			"JavaScript",
			"REST API",
		],
		projects: [
			{
				name: "Process Automation Suite",
				description:
					"Salesforce-based automation tools for streamlining client business workflows.",
				tech: ["Salesforce", "Apex", "Lightning"],
			},
		],
	},
	appmakersla: {
		company: "AppMakersLA",
		title: "Project Manager Intern",
		location: "Los Angeles",
		period: "2016",
		description:
			"Assisted with facilitation of full-stack application development. Monitored project progress and workflow while participating in client meetings, gaining foundational experience in software project management and agile development practices.",
		highlights: [
			"Assisted in project planning and sprint coordination for client applications",
			"Monitored project timelines and communicated status updates to stakeholders",
			"Participated in client meetings and requirements gathering sessions",
			"Gained hands-on experience with agile development workflows",
		],
		technologies: [
			"JavaScript",
			"HTML/CSS",
			"Project Management",
			"Agile",
		],
		projects: [
			{
				name: "Client Application Development",
				description:
					"Supported development and delivery of full-stack web applications for agency clients.",
				tech: ["JavaScript", "HTML/CSS"],
			},
		],
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
			card.className = "detail-project-card";

			var h3 = document.createElement("h3");
			h3.textContent = project.name;
			card.appendChild(h3);

			var p = document.createElement("p");
			p.textContent = project.description;
			card.appendChild(p);

			if (project.tech && project.tech.length > 0) {
				var tags = document.createElement("div");
				tags.className = "project-tags";
				project.tech.forEach(function (t) {
					var span = document.createElement("span");
					span.textContent = t;
					tags.appendChild(span);
				});
				card.appendChild(tags);
			}

			projectGrid.appendChild(card);
		});
	} else {
		document.getElementById("projectsSection").style.display = "none";
	}
}

document.addEventListener("DOMContentLoaded", renderExperience);
