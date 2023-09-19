import { v4 as uuidv4 } from 'uuid';

type SubItems = string[];

export interface IListItem {
  listTitle: string;
  subItems?: SubItems;
}

export interface ITranslation {
  _id: string;
  language: 'en' | 'ua';
  title: string;
  list: IListItem[];
}

export interface IConditionsData {
  _id: string;
  translations: ITranslation[];
}

const conditionsData: IConditionsData[] = [
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Data Privacy',
        list: [
          {
            listTitle:
              'All personal data provided to the "I Will Help You Foundation" will be treated with utmost confidentiality and in accordance with our [Privacy Policy](#).',
          },
          {
            listTitle:
              'Users acknowledge and agree that certain data may be anonymized and used for statistical and research purposes.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Конфіденційність даних',
        list: [
          {
            listTitle:
              'Всі особисті дані, надані Фонду «Я допоможу вам», будуть розглядатися як найбільш конфіденційні та відповідно до нашої [Політики конфіденційності](#).',
          },
          {
            listTitle:
              'Користувачі визнають та погоджуються з тим, що деякі дані можуть бути анонімізовані та використовуватися для статистичних та дослідницьких цілей.',
          },
        ],
      },
    ],
  },

];

export default conditionsData;
