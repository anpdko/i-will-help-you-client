import { v4 as uuidv4 } from 'uuid';

export interface ITranslation {
  language: 'en' | 'ua';
  activity: string;
  fullName: string;
  _id: string;
}

export interface IAboutTeamData {
  _id: string;
  imgPath: string;
  linkedIn: string;
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
    imgPath: 'Bohdan_Nemyrovskyi',
    linkedIn: '',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Natalia Irgovtsij',
        activity: 'Volunteer, Coordinator EduHorizon Project',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Наталія Ірговцій',
        activity: 'Волонтер, Координатор проекту EduHorizon',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Natalia_Irgovtsij',
    linkedIn: '',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Mariia Irhovtsii',
        activity: 'Volunteer, Coordinator LegalAid Project',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Марія Ірговцій',
        activity: 'Волонтер, Координатор проекту LegalAid',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Mariia_Irhovtsii',
    linkedIn: '',
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
    imgPath: 'Olena_Varlamova',
    linkedIn: 'https://www.linkedin.com/in/olena-varlamova-86a85724a',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Svitlana Sugak',
        activity: 'Volunteer, PM',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Світлана Сугак',
        activity: 'Волонтер, PM',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Svitlana_Sugak',
    linkedIn: 'https://www.linkedin.com/in/svitlanasugak/',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Zhanna Sorokina',
        activity: 'Volunteer, Content Manager',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Жанна Сорокіна',
        activity: 'Волонтер, Контент-менеджер',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Zhanna_Sorokina',
    linkedIn:
      'https://www.linkedin.com/in/%D0%B6%D0%B0%D0%BD%D0%BD%D0%B0-%D1%81%D0%BE%D1%80%D0%BE%D0%BA%D1%96%D0%BD%D0%B0-059511284/',
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
    imgPath: 'Anastasiia_Chernyshova',
    linkedIn: 'https://www.linkedin.com/in/anastasiia-chernyshova/',
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
    imgPath: 'Jessica_Sahun',
    linkedIn: 'https://linkedin.com/in/jessica-sahun',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Tetiana Tarataiko',
        activity: 'Volunteer, UI/UX Designer',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Тетяна Таратайко',
        activity: 'Волонтер, UI/UX Designer',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Tetiana_Tarataiko',
    linkedIn: 'https://www.linkedin.com/in/tetiana-tarataiko-884434227/',
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
        fullName: 'Андрій Прядко',
        activity: 'Волонтер, Full Stack Lead',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Andrii_Pryadko',
    linkedIn: 'https://www.linkedin.com/in/anpdko',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Dmytro Kuts',
        activity: 'Volunteer, Front-End',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Дмитро Куц',
        activity: 'Волонтер, Front-End',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Dmytro_Kuts',
    linkedIn: 'https://www.linkedin.com/in/dmytro-kuts-v/',
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
    imgPath: 'Iryna_Petrenko',
    linkedIn: 'https://www.linkedin.com/in/iryna-petrenko-x/',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Alina Shtykh',
        activity: 'Volunteer, Front-End',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Аліна Штих',
        activity: 'Волонтер, Front-End',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Alina_Shtykh',
    linkedIn: 'https://www.linkedin.com/in/alina-shtykh-2b6070188/',
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
    imgPath: 'Anastasiia_Koptylova',
    linkedIn: 'https://www.linkedin.com/in/anastasiia-koptylova/',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Olesia Andreiko',
        activity: 'Volunteer, Front-End',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Олеся Андрейко',
        activity: 'Волонтер, Front-End',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Olesia_Andreiko',
    linkedIn: '',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Hanna Yefimchuk',
        activity: 'Volunteer, Front-End',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Анна Єфімчук',
        activity: 'Волонтер, Front-End',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Anna_Yefimchuk',
    linkedIn: 'https://www.linkedin.com/in/anna-yefimchuk/',
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
        fullName: 'Володимир Пиц',
        activity: 'Волонтер, Back-End',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Volodymyr_Pyts',
    linkedIn: 'https://www.linkedin.com/in/volodymyr-pyts/',
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
    imgPath: 'Sofiia_Voloshyn',
    linkedIn: 'https://www.linkedin.com/in/sofiiavoloshyn/',
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
    imgPath: 'Tsyhykal_Olha',
    linkedIn: '',
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
    imgPath: 'Alina_Astanina',
    linkedIn: 'https://www.linkedin.com/in/alina-astanina-466b0223a/',
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
    imgPath: 'Vita_Polishchuk',
    linkedIn: 'https://www.linkedin.com/in/vita-polishchuk-296a48266/',
  },
  {
    translations: [
      {
        language: 'en',
        fullName: 'Tetiana Sych',
        activity: 'Volunteer, QA',
        _id: uuidv4(),
      },
      {
        language: 'ua',
        fullName: 'Тетяна Сич',
        activity: 'Волонтер, QA',
        _id: uuidv4(),
      },
    ],
    _id: uuidv4(),
    imgPath: 'Tetiana_Sych',
    linkedIn:
      'https://www.linkedin.com/in/%D1%82%D0%B5%D1%82%D1%8F%D0%BD%D0%B0-%D1%81%D0%B8%D1%87-0380a0284/',
  },
];

export default aboutTeamData;
