export interface ITranslation {
  language: 'en' | 'ua';
  description: string;
  title: string;
}

export interface IFormHeaderData {
  id: string;
  imagePath: string;
  translations: ITranslation[];
}

const formHeaderData: IFormHeaderData[] = [
  {
    translations: [
      {
        language: 'en',
        title: 'Join our volunteer team',
        description:
          'If you want to join our team of volunteers and help with what you do best, fill out the form below and we are waiting for you.',
      },
      {
        language: 'ua',
        title: 'Приєднуйтесь до нашої волонтерської команди',
        description:
          'Якщо ви хочете приєднатися до нашої команди волонтерів і допомогти у тому, що ви вмієте найкраще, заповніть форму нижче, і ми чекаємо на вас.',
      },
    ],
    id: 'readyneed',
    imagePath: '/static/images/banners/banner-1.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        title: 'Application for assistance',
        description:
          'Our mission is to help the citizens of Ukraine who have been affected by the war and forced to leave their homes and seek refuge outside their homeland.',
      },
      {
        language: 'ua',
        title: 'Заявка на допомогу',
        description:
          'Наша місія – допомогти громадянам України, які постраждали від війни та були змушені покинути свої домівки та шукати притулку за межами Батьківщини.',
      },
    ],
    id: 'needhelp',
    imagePath: '/static/images/banners/banner-2.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        title: 'We need your help! Help now!',
        description:
          "Make a difference today, and let's create a world where everyone can find their healing haven.",
      },
      {
        language: 'ua',
        title: 'Нам потрібна ваша допомога! Допоможіть зараз!',
        description:
          'Зробіть зміни сьогодні, і давайте створимо світ, де кожен зможе знайти свій притулок для лікування.',
      },
    ],
    id: 'donate',
    imagePath: '/static/images/banners/banner-3.jpg',
  },
];

export default formHeaderData;
