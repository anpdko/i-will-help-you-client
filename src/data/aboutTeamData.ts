export interface ITranslation {
  language: 'en' | 'ua';
  activity: string;
  fullName: string;
}

export interface IAboutTeamData {
  id: string;
  imgPhath: string;
  translations: ITranslation[];
}

const aboutTeamData: IAboutTeamData[] = [
  {
    translations: [
      {
        language: 'en',
        fullName: 'Nataliya Kovalenko',
        activity: 'Volunteer',
      },
      {
        language: 'ua',
        fullName: 'Наталія Коваленко',
        activity: 'Волонтер',
      },
    ],
    id: 'firstBanner',
    imgPhath: 'image-1.jpeg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Oleksandr Korol',
        activity: 'Volunteer',
      },
      {
        language: 'ua',
        fullName: 'Олександр Король',
        activity: 'Волонтер',
      },
    ],
    id: 'secondBanner',
    imgPhath: 'image-2.jpeg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Yurii Bondarenko',
        activity: 'Volunteer',
      },
      {
        language: 'ua',
        fullName: 'Юрій Бондаренко',
        activity: 'Волонтер',
      },
    ],
    id: 'thirdBanner',
    imgPhath: 'image-3.jpeg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Anastasiya Romanenko',
        activity: 'Volunteer',
      },
      {
        language: 'ua',
        fullName: 'Анастасія Романенко',
        activity: 'Волонтер',
      },
    ],
    id: 'thirdBanner',
    imgPhath: 'image-4.jpeg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Nataliya Kovalenko',
        activity: 'Volunteer',
      },
      {
        language: 'ua',
        fullName: 'Наталія Коваленко',
        activity: 'Волонтер',
      },
    ],
    id: 'firstBanner',
    imgPhath: 'image-1.jpeg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Oleksandr Korol',
        activity: 'Volunteer',
      },
      {
        language: 'ua',
        fullName: 'Олександр Король',
        activity: 'Волонтер',
      },
    ],
    id: 'secondBanner',
    imgPhath: 'image-2.jpeg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Yurii Bondarenko',
        activity: 'Volunteer',
      },
      {
        language: 'ua',
        fullName: 'Юрій Бондаренко',
        activity: 'Волонтер',
      },
    ],
    id: 'thirdBanner',
    imgPhath: 'image-3.jpeg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Anastasiya Romanenko',
        activity: 'Volunteer',
      },
      {
        language: 'ua',
        fullName: 'Анастасія Романенко',
        activity: 'Волонтер',
      },
    ],
    id: 'thirdBanner',
    imgPhath: 'image-4.jpeg',
  },
];

export default aboutTeamData;
