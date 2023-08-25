export interface IProjectHeaderData {
  id: string;
  title: string;
  description: string;
  img: string;
}

const projectHeaderData: IProjectHeaderData[] = [
  {
    id: 'oportunityConnect',
    title: 'OpportunityConnect',
    description: '"Building new bridges and fostering connections"',
    img: '/static/images/projects/project-1.jpg',
  },
  {
    id: 'healingHaven',
    title: 'HealingHaven',
    description: '"Guiding light in the path to recovery"',
    img: '/static/images/projects/project-2.jpg',
  },
  {
    id: 'eduHorizon',
    title: 'EduHorizon',
    description: '"Lifeline that extends beyond borders"',
    img: '/static/images/projects/project-3.jpg',
  },
  {
    id: 'eduConnect',
    title: 'EduConnect',
    description: '"Nurturing a generation of empowered young Ukrainians"',
    img: '/static/images/projects/project-4.jpg',
  },
  {
    id: 'contentUplift',
    title: 'ContentUplift',
    description:
      '"Advancement of Ukrainian culture, creativity, and innovation"',
    img: '/static/images/projects/project-5.jpg',
  },
  {
    id: 'compassionCare',
    title: 'CompassionCare',
    description: '"We bring together donors, volunteers, and beneficiaries"',
    img: '/static/images/projects/project-6.jpg',
  },
];

export default projectHeaderData;
