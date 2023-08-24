export interface IReviewData {
  id: number;
  tabName: string;
  tabStatus: string;
  tabImg: string;
  title: string;
  description: string;
}

const reviewData: IReviewData[] = [
  {
    id: 1,
    tabName: 'Anna Shevchenko',
    tabStatus: 'Volunteer',
    tabImg: '/static/images/reviews/review-1.png',
    title: 'Together, Building a Brighter Future',
    description:
      'At HealingHaven Ukraine, our mission is driven by the belief that every individual deserves compassion, support, and a chance to thrive. With unwavering dedication, we stand handin hand with the Ukrainian diaspora, igniting hope and empowering lives. Join us on this journey of healing, as we forge a brighter future for those affected by the ravages of war.',
  },
  {
    id: 2,
    tabName: 'Yulia Tkachenko',
    tabStatus: 'Volunteer',
    tabImg: '/static/images/reviews/review-2.png',
    title: 'Together, Building a Brighter Future',
    description:
      'As we look ahead, our commitment remains steadfast—to be a beacon of hope for those who seek solace, an advocate for those who yearn to grow, and a guiding light for those who dream of a world beyond conflict.',
  },
  {
    id: 3,
    tabName: 'Olena Ivanenko',
    tabStatus: 'Volunteer',
    tabImg: '/static/images/reviews/review-3.png',
    title: 'Together, Building a Brighter Future',
    description: `Join us in weaving a future of possibility, where every life is cherished, and every dream
    is nurtured. Together, we can change the trajectory of countless lives, one act of kindness at a time.`,
  },
  {
    id: 4,
    tabName: 'Maria Dmytruk',
    tabStatus: 'Volunteer',
    tabImg: '/static/images/reviews/review-4.png',
    title: 'Together, Building a Brighter Future',
    description:
      'Join us in weaving a future of possibility, where every life is cherished, and every dream is nurtured. Together, we can change the trajectory of countless lives, one act of kindness at a time.',
  },
  {
    id: 5,
    tabName: 'Olena Ivanenko',
    tabStatus: 'Volunteer',
    tabImg: '/static/images/reviews/review-3.png',
    title: 'Together, Building a Brighter Future',
    description: `Join us in weaving a future of possibility, where every life is cherished, and every dream
    is nurtured. Together, we can change the trajectory of countless lives, one act of kindness at a time.`,
  },
  {
    id: 6,
    tabName: 'Maria Dmytruk',
    tabStatus: 'Volunteer',
    tabImg: '/static/images/reviews/review-4.png',
    title: 'Together, Building a Brighter Future',
    description:
      'Join us in weaving a future of possibility, where every life is cherished, and every dream is nurtured. Together, we can change the trajectory of countless lives, one act of kindness at a time.',
  },
];

export default reviewData;
