import { v4 as uuidv4 } from 'uuid';
export interface ITranslation {
  language: 'en' | 'ua';
  description: string;
  title: string;
  _id: string;
}

export interface IBannersData {
  _id: string;
  img: string;
  link: string;
  translations: ITranslation[];
}

const bannersData: IBannersData[] = [
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: '"Be the Change – Volunteer with Us!"',
        description:
          'Embrace the power of giving back and join our compassionate team of volunteers. Together, we can make a difference in the lives of those affected by the war. Become a volunteer today!',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: '"Будь зміною – долучайся до нас як волонтер!"',
        description:
          'Відчуй силу допомоги та приєднуйся до нашої команди волонтерів. Разом ми можемо змінити життя тих, хто постраждав від війни. Стань волонтером вже сьогодні!',
      },
    ],
    _id: uuidv4(),
    img: 'banner-1',
    link: '/volunteer',
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: '"Donate to Heal, Empower, and Rebuild"',
        description:
          'Every contribution counts. Your generous donation helps us reach more war survivorsand provide them with the care and resources they deserve. Join us in making a lasting impact.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: '"Задонать для надання сил та відновлення"',
        description:
          'Кожен внесок має значення. Ваша щедра пожертва допомагає нам охопити більше людей, які пережили війну, і забезпечити їх турботою та ресурсами, на які вони заслуговують. Приєднуйтесь до нас в цій довгостроковій боротьбі.',
      },
    ],
    _id: uuidv4(),
    img: 'banner-2',
    link: '/donate',
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: '"Seeking Support? Weʼre Here for You!"',
        description:
          'Are you a war-affected individual in need of assistance? Our dedicated team is ready to extend a helping hand. Share your story with us and let us support you on your healing journey.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: '"Потрібна підтримка? Ми тут заради Вас!"',
        description:
          'Ви постраждали від війни, і потребуєте підтримки? Наша віддана команда готова протягнути руку допомоги. Поділіться своєю історією з нами, і дозвольте підтримати вас на шляху до зцілення.',
      },
    ],
    _id: uuidv4(),
    img: 'banner-3',
    link: '/needhelp',
  },
];

export default bannersData;
