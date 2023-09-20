import { v4 as uuidv4 } from 'uuid';

export interface IListItem {
  _id: string;
  listTitle: string;
  subItems?: string[];
}

export interface ITranslation {
  _id: string;
  language: 'en' | 'ua';
  title: string;
  list: IListItem[];
}

export interface IPrivacyData {
  _id: string;
  translations: ITranslation[];
}

const privacyData: IPrivacyData[] = [
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Introduction',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Welcome to iwillhelpyou.charity ("we", "our", or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we handle and protect your personal data when you visit our website and tell you about your privacy rights and how the law protects you.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Введення',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Ласкаво просимо до iwillhelpyou.charity («ми», «наш» або «нас»). Ми поважаємо вашу конфіденційність і прагнемо захищати ваші особисті дані. Ця Політика конфіденційності інформуватиме вас про те, як ми обробляємо та захищаємо ваші персональні дані, коли ви відвідуєте наш веб-сайт, а також розповість вам про ваші права на конфіденційність і як закон захищає вас.',
          },
        ],
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Data We Collect',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Depending on your interactions with our site, we may collect the following data:',
            subItems: [
              'Identity Data: includes first name, last name, username, or similar identifier.',
              'Contact Data: includes email address and telephone numbers.',
              'Technical Data: includes email address and telephone numbers.',
            ],
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Зібрані нами дані',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Залежно від вашої взаємодії з нашим сайтом, ми можемо зібрати наступні дані:',
            subItems: [
              "Дані про особу: включають ім'я, прізвище, логін або подібний ідентифікатор.",
              'Контактні дані: включають адресу електронної пошти та номери телефонів.',
              'Технічні дані: включають адресу електронної пошти та номери телефонів.',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How We Use Your Data',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'We will only use your personal data for the purposes for which we collected it, including:',
            subItems: [
              'To register you as a new customer.',
              'To manage our relationship with you.',
              'To administer and protect our site.',
            ],
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як ми використовуємо ваші дані',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Ми використовуватимемо ваші особисті дані лише для тих цілей, для яких ми їх зібрали, зокрема:',
            subItems: [
              'Щоб зареєструвати вас як нового клієнта.',
              'Щоб керувати нашими відносинами з вами.',
              'Для адміністрування та захисту нашого сайту.',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Data Protection',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Захист даних',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Ми запровадили відповідні заходи безпеки, щоб запобігти випадковій втраті, використанню чи несанкціонованому доступу до ваших особистих даних.',
          },
        ],
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Data Sharing',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'We may share your data with trusted third parties, including service providers, where necessary to operate our website and deliver our services. We ensure all third parties respect the security of your personal data and treat it according to the law.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Обмін даними',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Ми можемо передавати ваші дані надійним третім сторонам, включаючи постачальників послуг, якщо це необхідно для роботи нашого веб-сайту та надання наших послуг. Ми гарантуємо, що всі треті сторони поважають безпеку ваших персональних даних і обробляють їх відповідно до закону.',
          },
        ],
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'International Transfers',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'We do not transfer your personal data outside of Poland.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Міжнародні перекази',
        list: [
          {
            _id: uuidv4(),
            listTitle: 'Ми не передаємо ваші персональні дані за межі Польщі.',
          },
        ],
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Your Rights',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Under certain circumstances, you have rights under data protection laws concerning your personal data:',
            subItems: [
              'Request access: to your personal data.',
              'Request correction: of your personal data.',
              'Request erasure: of your personal data.',
              'Object to processing: of your personal data.',
            ],
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Ваші права',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'За певних обставин ви маєте права відповідно до законів про захист даних щодо ваших персональних даних:',
            subItems: [
              'Запит на доступ: до ваших персональних даних.',
              'Запит на виправлення: ваших персональних даних.',
              'Вимагайте видалення: ваших персональних даних.',
              'Об’єкт обробки: Ваші персональні дані.',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Cookies',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'We use cookies and similar tracking technology to track activity on our site and hold certain information. For further details, please refer to our Cookie Policy.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Cookies',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Ми використовуємо файли cookie та подібні технології відстеження, щоб відстежувати дії на нашому сайті та зберігати певну інформацію. Для отримання додаткової інформації зверніться до нашої Політики щодо файлів cookie.',
          },
        ],
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Changes to this Privacy Policy',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Any changes we make to our Privacy Policy in the future will be posted on this page and, where appropriate, notified to you by email.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Зміни до цієї Політики конфіденційності',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Будь-які зміни, які ми внесемо в нашу Політику конфіденційності в майбутньому, буде опубліковано на цій сторінці та, якщо це необхідно, буде повідомлено вам електронною поштою.',
          },
        ],
      },
    ],
  },
  {
    _id: uuidv4(),
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Contact Us',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'For any questions regarding this Privacy Policy, please contact us at legal@iwillhelpyou.charity.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: "Зв'яжіться з нами",
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'З будь-якими запитаннями щодо цієї Політики конфіденційності зв’яжіться з нами за адресою legal@iwillhelpyou.charity.',
          },
        ],
      },
    ],
  },
];

export default privacyData;
