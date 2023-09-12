export interface ITranslation {
  language: 'en' | 'ua';
  description: string;
  title: string;
}

export interface IBannersData {
  id: string;
  img: string;
  link: string;
  translations: ITranslation[];
}

const bannersData: IBannersData[] = [
  {
    translations: [
      {
        language: 'en',
        title: '"Be the Change – Volunteer with Us!"',
        description:
          'Embrace the power of giving back and join our compassionate team of volunteers. Together, we can make a difference in the lives of those affected by conflict. Become a volunteer today!',
      },
      {
        language: 'ua',
        title: '"Будь зміною – долучайся до нас як волонтер!"',
        description:
          'Відчуй силу допомоги та приєднуйся до нашої команди волонтерів. Разом ми можемо змінити життя тих, хто постраждав від конфлікту. Стань волонтером вже сьогодні!',
      },
    ],
    id: 'firstBanner',
    img: '/static/images/banners/banner-1.jpg',
    link: '/readyneed',
  },
  {
    translations: [
      {
        language: 'en',
        title: '"Donate to Heal, Empower, and Rebuild"',
        description:
          'Every contribution counts. Your generous donation helps us reach more war survivorsand provide them with the care and resources they deserve. Join us in making a lasting impact.',
      },
      {
        language: 'ua',
        title: '"Задонать для надання сил та відновлення"',
        description:
          'Кожен внесок має значення. Ваша щедра пожертва допомагає нам охопити більше людей, які пережили війну, і забезпечити їх турботою та ресурсами, на які вони заслуговують. Приєднуйтесь до нас в цій довгостроковій боротьбі.',
      },
    ],
    id: 'secondBanner',
    img: '/static/images/banners/banner-2.jpg',
    link: '/donate',
  },
  {
    translations: [
      {
        language: 'en',
        title: '"Seeking Support? Weʼre Here for You!"',
        description:
          'Are you a war-affected individual in need of assistance? Our dedicated team is ready to extend a helping hand. Share your story with us and let us support you on your healing journey.',
      },
      {
        language: 'ua',
        title: '"Потрібна підтримка? Ми тут заради Вас!"',
        description:
          'Ви постраждали від війни, і потребуєте підтримки? Наша віддана команда готова протягнути руку допомоги. Поділіться своєю історією з нами, і дозвольте підтримати вас на шляху до зцілення.',
      },
    ],
    id: 'thirdBanner',
    img: '/static/images/banners/banner-3.jpg',
    link: '/needhelp',
  },
];

export default bannersData;
