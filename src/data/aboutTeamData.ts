import { v4 as uuidv4 } from 'uuid';

export interface ITranslation {
  language: 'en' | 'ua';
  activity: string;
  fullName: string;
  _id: string;
}

export interface IAboutTeamData {
  _id: string;
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
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Богдан Немировський',
        activity: 'Волонтер, CEO',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Bohdan_Nemyrovskyi.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Natalia Irgovtsij',
        activity: 'Coordinator of EduHorizon Project',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Наталія Ірговцій',
        activity: 'Координатор проекту EduHorizon',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Natalia_Irgovtsij.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Olena Varlamova',
        activity: 'Volunteer, PM',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Олена Варламова',
        activity: 'Волонтер, PM',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Olena Varlamova.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Jessica Sahun',
        activity: 'Volunteer, UI/UX Designer',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Джесіка Сагун',
        activity: 'Волонтер, UI/UX Designer',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Jessica_Sahun.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Andrii Priadko',
        activity: 'Volunteer, Full Stack Lead',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Андрій Прдяко',
        activity: 'Волонтер, Full Stack Lead',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Andrii_Priadko.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Dmytro Kuts',
        activity: 'Volunteer, Full Stack',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Дмитро Куц',
        activity: 'Волонтер, Full Stack',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Dmytro_Kuts.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Sofiia Voloshyn',
        activity: 'Volunteer, Lead QA',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Софія Волошин',
        activity: 'Волонтер, Lead QA',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Sofiia_Voloshyn.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Anastasiia Chernyshova',
        activity: 'Volunteer, Lead Design',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Анастасія Чернишова',
        activity: 'Волонтер, Lead Design',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Anastasiia Chernyshova.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Iryna Petrenko',
        activity: 'Volunteer, Front-End ',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Ірина Петренко',
        activity: 'Волонтер, Front-End ',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Iryna_Petrenko.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Anastasiia Koptylova',
        activity: 'Volunteer, Front-End',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Анастасія Коптилова',
        activity: 'Волонтер, Front-End',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Anastasiia_Koptylova.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Olha Tsyhykal',
        activity: 'Volunteer, QA',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Ольга Цигикал',
        activity: 'Волонтер, QA ',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Tsyhykal_Olha.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Alina Astanina',
        activity: 'Volunteer, QA',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Аліна Астаніна',
        activity: 'Волонтер, QA',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Alina_Astanina.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Vita Polishchuk',
        activity: 'Volunteer, QA',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Віта Поліщук',
        activity: 'Волонтер, QA',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Vita_Polishchuk.jpg',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Volodymyr Pyts',
        activity: 'Volunteer, Back-End',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Volodymyr Pyts',
        activity: 'Волонтер, Back-End',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPhath: 'Volodymyr_Pyts.jpg',
  },
];

export default aboutTeamData;
