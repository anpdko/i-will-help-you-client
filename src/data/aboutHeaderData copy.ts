export interface ITranslation {
  language: 'en' | 'ua';
  title: string;
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
        title: 'We bring together donors, volunteers, and beneficiaries.',
        
      },
      {
        language: 'ua',
        title: 'Ми об’єднуємо донорів, волонтерів та бенефіціарів.',
      },
    ],
    id: 'image-1',
    imgPhath: 'image-1.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        title: 'Provide guiding light for the millions of Ukrainians',
        
      },
      {
        language: 'ua',
        title: 'Дати дороговказ для мільйонів українців',
      },
    ],
    id: 'image-2',
    imgPhath: 'image-2.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        title: 'Cultivate a compassionate community that unites displaced Ukrainians',
        
      },
      {
        language: 'ua',
        title: 'Розвивайте співчутливу спільноту, яка об’єднує переміщених українців',
      },
    ],
    id: 'image-3',
    imgPhath: 'image-3.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        title: 'Illuminate the path toward stability, justice, and the promise of a new start',
        
      },
      {
        language: 'ua',
        title: 'Освітлюйте шлях до стабільності, справедливості та обіцянки нового початку',
      },
    ],
    id: 'image-4',
    imgPhath: 'image-4.jpg',
  },

];

export default aboutHeaderData;
