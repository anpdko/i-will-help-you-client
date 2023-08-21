import project1 from 'http://localhost:8080/static/images/projects/project-1.jpg';
import project2 from 'http://localhost:8080/static/images/projects/project-2.jpg';
import project3 from 'http://localhost:8080/static/images/projects/project-3.jpg';
import project4 from 'http://localhost:8080/static/images/projects/project-4.jpg';
import project5 from 'http://localhost:8080/static/images/projects/project-5.jpg';
import project6 from 'http://localhost:8080/static/images/projects/project-6.jpg';

export interface IProjectsData {
	id: string;
	title: string;
	description: string;
	link: string;
	img: string;
}

const projectsData: IProjectsData[] = [
	{
		id: 'opportunity',
		title: 'OpportunityConnect',
		description:
			'In the wake of conflict and displacement, many talented Ukrainians have found themselves in foreign lands, seeking refuge and a chance to rebuild their lives. OpportunityConnect Ukraine emerges as a beacon of hope, actively identifying and forging partnerships with companies willing to welcome Ukrainian talent. Our goal is not only to secure jobs but to empower individuals with the tools to flourish professionally, contributing positively to their host communities and embracing new horizons.',
		link: '#',
		img: project1,
	},
	{
		id: 'healing',
		title: 'HealingHaven Ukraine',
		description:
			'We recognize that the scars of war extend beyond the physical, and the emotional wounds carried by those who have experienced the horrors of war are deeply profound. In the years 2022-2023, more than 8 million Ukrainians fled the ravages of war, leaving behind shattered lives, lost loved ones, and haunting memories. Many of these brave souls now carry heavy burdens of grief, anxiety, depression, and trauma. HealingHaven Ukraine emerges as a guiding light, providing a compassionate hand to help them navigate the path toward healing and resilience.',
		link: '#',
		img: project2,
	},
	{
		id: 'horizon',
		title: 'EduHorizon',
		description:
			'EduHorizon Ukraine emerges as a radiant beacon of hope in the lives of young Ukrainian scholars whose dreams have been cast adrift by the tides of war. In the wake of the Russian-Ukrainian war, countless scholars found themselves uprooted, seeking refuge and a chance to continue their academic pursuits. EduHorizon Ukraine  is a resounding affirmation of their potential, a project committed  to providing access to education that might otherwise remain elusive. By collaborating with universities and colleges both locally and globally, we strive to pave the way for deserving Ukrainian students to embrace higher education free of financial burdens.',
		link: '#',
		img: project3,
	},
	{
		id: 'connect',
		title: 'EduConnect',
		description:
			'EduConnect Ukraine is a transformative educational initiative born from the conviction that every young Ukrainian deserves a bright and promising future, regardless of the shadows cast by war. Our mission is to bridge the educational gaps faced by children who have endured the turmoil of war, offering them a renewed chance to learn, grow, and flourish. Our project aspires to be a catalyst for positive change, bringing education to the forefront and nurturing   a generation of resilient, empowered, and knowledgeable young Ukrainians.',
		link: '#',
		img: project4,
	},
	{
		id: 'content',
		title: 'ContentUplift',
		description:
			'In an era of digital transformation, this initiative seeks to empower content creators, storytellers, and artists to amplify their voices  and share their narratives with the world, transcending borders and enriching global discourse. ContentUplift Ukraine is a testament to our commitment to nurturing artistic expression, providing the tools and support needed for individuals to generate impactful content. By procuring computers, offering technical guidance, and facilitating scriptwriting workshops, we aim to propel the Ukrainian creative spirit to new heights.',
		link: '#',
		img: project5,
	},
	{
		id: 'care',
		title: 'CompassionCare Ukraine',
		description:
			'With a spirit of generosity, we bring together donors, volunteers, and beneficiaries to weave a tapestry of care. CompassionCare Ukraine is more than just a project; itʼs a shared commitment to alleviating hunger, providing warm clothing, and offering vital resources for daily living. Our goal is to empower Ukrainians in need, granting them a renewed sense of dignity and the assurance that they are not alone on their journey.',
		link: '#',
		img: project6,
	},
];

export default projectsData;
