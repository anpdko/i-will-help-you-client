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
        fullName: 'Bohdan Nemyrovskyi',
        activity: 'Volunteer, CEO',
      },
      {
        language: 'ua',
        fullName: 'Богдан Немировський',
        activity: 'Волонтер, CEO',
      },
    ],
    id: 'Bohdan_Nemyrovskyi',
    imgPhath: 'Bohdan_Nemyrovskyi.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Natalia Irgovtsij',
        activity: 'Coordinator of EduHorizon Project',
      },
      {
        language: 'ua',
        fullName: 'Наталія Ірговцій',
        activity: 'Координатор проекту EduHorizon',
      },
    ],
    id: 'Natalia_Irgovtsij',
    imgPhath: 'Natalia_Irgovtsij.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Olena Varlamova',
        activity: 'Volunteer, PM',
      },
      {
        language: 'ua',
        fullName: 'Олена Варламова',
        activity: 'Волонтер, PM',
      },
    ],
    id: 'Olena Varlamova',
    imgPhath: 'Olena Varlamova.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Jessica Sahun',
        activity: 'Volunteer, UI/UX Designer',
      },
      {
        language: 'ua',
        fullName: 'Джесіка Сагун',
        activity: 'Волонтер, UI/UX Designer',
      },
    ],
    id: 'Jessica_Sahun',
    imgPhath: 'Jessica_Sahun.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Andrii Priadko',
        activity: 'Volunteer, Full Stack Lead',
      },
      {
        language: 'ua',
        fullName: 'Андрій Прдяко',
        activity: 'Волонтер, Full Stack Lead',
      },
    ],
    id: 'Andrii_Priadko',
    imgPhath: 'Andrii_Priadko.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Dmytro Kuts',
        activity: 'Volunteer, Full Stack',
      },
      {
        language: 'ua',
        fullName: 'Дмитро Куц',
        activity: 'Волонтер, Full Stack',
      },
    ],
    id: 'Dmytro_Kuts',
    imgPhath: 'Dmytro_Kuts.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Sofiia Voloshyn',
        activity: 'Volunteer, Lead QA',
      },
      {
        language: 'ua',
        fullName: 'Софія Волошин',
        activity: 'Волонтер, Lead QA',
      },
    ],
    id: 'Sofiia_Voloshyn',
    imgPhath: 'Sofiia_Voloshyn.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Anastasiia Chernyshova',
        activity: 'Volunteer, Lead Design',
      },
      {
        language: 'ua',
        fullName: 'Анастасія Чернишова',
        activity: 'Волонтер, Lead Design',
      },
    ],
    id: 'Anastasiia Chernyshova',
    imgPhath: 'Anastasiia Chernyshova.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Iryna Petrenko',
        activity: 'Volunteer, Front-End ',
      },
      {
        language: 'ua',
        fullName: 'Ірина Петренко',
        activity: 'Волонтер, Front-End ',
      },
    ],
    id: 'Iryna_Petrenko',
    imgPhath: 'Iryna_Petrenko.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Anastasiia Koptylova',
        activity: 'Volunteer, Front-End',
      },
      {
        language: 'ua',
        fullName: 'Анастасія Коптилова',
        activity: 'Волонтер, Front-End',
      },
    ],
    id: 'Anastasiia_Koptylova',
    imgPhath: 'Anastasiia_Koptylova.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Olha Tsyhykal',
        activity: 'Volunteer, QA',
      },
      {
        language: 'ua',
        fullName: 'Ольга Цигикал',
        activity: 'Волонтер, QA ',
      },
    ],
    id: 'Tsyhykal_Olha',
    imgPhath: 'Tsyhykal_Olha.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Alina Astanina',
        activity: 'Volunteer, QA',
      },
      {
        language: 'ua',
        fullName: 'Аліна Астаніна',
        activity: 'Волонтер, QA',
      },
    ],
    id: 'Alina_Astanina',
    imgPhath: 'Alina_Astanina.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Vita Polishchuk',
        activity: 'Volunteer, QA',
      },
      {
        language: 'ua',
        fullName: 'Віта Поліщук',
        activity: 'Волонтер, QA',
      },
    ],
    id: 'Vita_Polishchuk',
    imgPhath: 'Vita_Polishchuk.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Volodymyr Pyts',
        activity: 'Volunteer, Back-End',
      },
      {
        language: 'ua',
        fullName: 'Volodymyr Pyts',
        activity: 'Волонтер, Back-End',
      },
    ],
    id: 'Volodymyr_Pyts',
    imgPhath: 'Volodymyr_Pyts.jpg',
  },
];

export default aboutTeamData;
