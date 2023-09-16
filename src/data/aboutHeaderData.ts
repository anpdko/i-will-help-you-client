export interface ITranslation {
  language: 'en' | 'ua';
  text: string;
}

export interface IAboutHeaderData {
  id: string;
  imgPhath: string;
  translations: ITranslation[];
}

const aboutHeaderData: IAboutHeaderData[] = [
  {
    translations: [
      {
        language: 'en',
        text: 'We bring together donors, volunteers, and beneficiaries.',
      },
      {
        language: 'ua',
        text: 'Ми об’єднуємо донорів, волонтерів та бенефіціарів.',
      },
    ],
    id: 'image-1',
    imgPhath: 'image-1.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        text: 'Provide guiding light for the millions of Ukrainians',
      },
      {
        language: 'ua',
        text: 'Дати дороговказ для мільйонів українців',
      },
    ],
    id: 'image-2',
    imgPhath: 'image-2.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        text: 'Cultivate a compassionate community that unites displaced Ukrainians',
      },
      {
        language: 'ua',
        text: 'Розвивайте співчутливу спільноту, яка об’єднує переміщених українців',
      },
    ],
    id: 'image-3',
    imgPhath: 'image-3.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        text: 'Illuminate the path toward stability, justice, and the promise of a new start',
      },
      {
        language: 'ua',
        text: 'Освітлюйте шлях до стабільності, справедливості та обіцянки нового початку',
      },
    ],
    id: 'image-4',
    imgPhath: 'image-4.jpg',
  },
];

export default aboutHeaderData;
