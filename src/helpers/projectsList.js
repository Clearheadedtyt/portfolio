import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";


const projects = [
	{
		title: 'Обучение в ИГХТУ',
		skills: 'В данный момент прохожу обучение в Ивановском Химико-Технологическом университете, 2 курс ',
		img: project01,
		imgBig: project01Big,
		gitHubLink: 'https://github.com',
	},
	{
		title: 'Front-end',
		img: project02,
		imgBig: project02Big,
		skills: 'React, HTML, CSS, Bootstrap',
		gitHubLink: 'https://github.com',
	},
	{
		title: 'Back-end',
		img: project03,
		imgBig: project03Big,
		skills: 'SQL, NoSQL, JavaScript',
		gitHubLink: 'https://github.com',
	},
	{
		title: 'Скоро',
		img: project04,
		imgBig: project04Big,
		skills: 'Скоро здесь будет что-то ещё...',
	},
];

export {projects}