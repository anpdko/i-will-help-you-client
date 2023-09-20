import { v4 as uuidv4 } from 'uuid';
export interface ITranslation {
  _id: string;
  language: 'en' | 'ua';
  text: string;
}

export interface IAboutHeaderData {
  _id: string;
  imgPhath: string;
  translations: ITranslation[];
}

const aboutHeaderData: IAboutHeaderData[] = [
  {
    translations: [
      {
        language: 'en',
        text: 'We bring together donors, volunteers, and beneficiaries.',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        text: 'Ми об’єднуємо донорів, волонтерів та бенефіціарів.',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'image-1.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        text: 'Provide guiding light for the millions of Ukrainians',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        text: 'Дати дороговказ для мільйонів українців',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'image-2.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        text: 'Cultivate a compassionate community that unites displaced Ukrainians',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        text: 'Розвивайте співчутливу спільноту, яка об’єднує переміщених українців',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'image-3.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        text: 'Illuminate the path toward stability, justice, and the promise of a new start',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        text: 'Освітлюйте шлях до стабільності, справедливості та обіцянки нового початку',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'image-4.jpg',
  },
];

export default aboutHeaderData;
