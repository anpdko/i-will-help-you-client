import { v4 as uuidv4 } from 'uuid';

export interface ITranslation {
  language: 'en' | 'ua';
  description: string;
  title: string;
  _id: string;
}

export interface IPablicyData {
  _id: string;
  translations: ITranslation[];
}

const pablicyData: IPablicyData[] = [
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Publicity Consent',
        description:
          'By interacting with, donating to, or participating in any programs associated with the "I Will Help You Foundation," you grant the Foundation permission unless explicitly indicated otherwise, to use your name, image, likeness, and related content for promotional, marketing, and publicity purposes. This could be in various formats, including print, broadcast, or online platforms, without any further permission or payment.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Згода на рекламу',
        description:
          'Взаємодіючи, роблячи пожертвування або беручи участь у будь-яких програмах, пов’язаних із Фондом «Я допоможу тобі», ви надаєте Фонду дозвіл, якщо не вказано інше, використовувати ваше ім’я, зображення, зображення та відповідний вміст для реклами, маркетингу, і рекламні цілі. Це може бути в різних форматах, включно з друкованими, трансляційними або онлайн-платформами, без додаткового дозволу чи оплати.',
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Media Collaborations',
        description:
          "The Foundation may collaborate with media outlets and agencies to promote its initiatives and share success stories. Participants and beneficiaries of the Foundation's programs may be featured, and their stories may be shared, albeit with utmost respect and sensitivity.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Співпраця зі ЗМІ',
        description:
          'Фонд може співпрацювати із засобами масової інформації та агентствами для просування своїх ініціатив та обміну історіями успіху. Можуть бути представлені учасники та бенефіціари програм Фонду, і їхні історії можна ділитися, хоча й з максимальною повагою та делікатністю.',
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Opting Out',
        description:
          'Should you wish not to be featured or have your story shared for publicity purposes, you have the right to opt out. Please communicate your preferences clearly to our team, and we will respect your wishes.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Відмова',
        description:
          'Якщо ви не хочете, щоб ваша історія була представлена в рекламі, ви маєте право відмовитися. Будь ласка, чітко повідомте нашій команді про свої вподобання, і ми поважатимемо ваші побажання.',
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Accuracy in Reporting',
        description:
          'While we make every effort to ensure the accuracy and truthfulness of our publicity materials, we ask participants and contributors to inform us immediately if they find any discrepancies or misrepresentations.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Точність у звітності',
        description:
          'Хоча ми докладаємо всіх зусиль, щоб забезпечити точність і правдивість наших рекламних матеріалів, ми просимо учасників і співавторів негайно інформувати нас, якщо вони виявлять будь-які розбіжності або спотворення.',
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Use of Foundation Name and Logo',
        description:
          'Unauthorized use of the "I Will Help You Foundation" name, logo, or any associated materials for publicity or any other purposes is strictly prohibited unless explicit permission is granted by the Foundation.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Використання назви та логотипу фонду',
        description:
          'Несанкціоноване використання назви, логотипу або будь-яких пов’язаних з ними матеріалів «Фонд «Я допоможу тобі» для реклами чи будь-яких інших цілей суворо заборонено, окрім випадків, коли Фонд надає чіткий дозвіл.',
      },
    ],
  },
];

export default pablicyData;
