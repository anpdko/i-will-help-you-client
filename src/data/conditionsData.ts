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
            _id: uuidv4(),
            listTitle:
              'All personal data provided to the "I Will Help You Foundation" will be treated with utmost confidentiality and in accordance with our [Privacy Policy](#).',
          },
          {
            _id: uuidv4(),
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
            _id: uuidv4(),
            listTitle:
              'Всі особисті дані, надані Фонду «Я допоможу вам», будуть розглядатися як найбільш конфіденційні та відповідно до нашої [Політики конфіденційності](#).',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Користувачі визнають та погоджуються з тим, що деякі дані можуть бути анонімізовані та використовуватися для статистичних та дослідницьких цілей.',
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
        title: 'Donation Refunds',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              "Donations are considered final. However, under exceptional circumstances, refunds may be issued subject to the Foundation's discretion.",
          },
          {
            _id: uuidv4(),
            listTitle:
              'Users are encouraged to contact our support team with any concerns related to their donations.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Повернення пожертв',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Пожертви вважаються остаточними. Проте, за виняткових обставин, відшкодування може здійснюватися на розсуд Фонду.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Заохочуємо користувачів звертатися до нашої служби підтримки з будь-якими проблемами, пов’язаними з їхніми пожертвами.',
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
        title: 'Intellectual Property',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'All contents, including but not limited to graphics, text, logos, and images, are the sole property of the "I Will Help You Foundation" or its affiliated content creators.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Unauthorized use, reproduction, or redistribution of website content is strictly prohibited.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Інтелектуальна власність',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Увесь вміст, включаючи, але не обмежуючись, графіку, текст, логотипи та зображення, є виключною власністю «I Will Help You Foundation» або його афілійованих творців вмісту.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Несанкціоноване використання, відтворення або повторне розповсюдження вмісту веб-сайту суворо заборонено.',
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
        title: 'Use of Collected Data',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Data submitted through our forms will be used solely for the purposes indicated at the point of collection.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'We pledge not to share, sell, or lease your personal information to third parties unless we have your explicit permission.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Використання зібраних даних',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Дані, надіслані через наші форми, використовуватимуться виключно для цілей, зазначених у місці збору.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Ми зобов’язуємося не надавати, не продавати та не передавати вашу особисту інформацію третім особам без вашого явного дозволу.',
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
        title: 'Payment Systems',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'All transactions are conducted through secure payment gateways. However, no system is entirely secure, and we cannot guarantee the absolute security of your information.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Users are urged to protect their own personal and payment information and not share it unnecessarily.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Платіжні системи',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Усі транзакції проводяться через безпечні платіжні шлюзи. Однак жодна система не є повністю безпечною, і ми не можемо гарантувати абсолютну безпеку вашої інформації.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Користувачів закликають захищати свою особисту та платіжну інформацію та не розголошувати її без потреби.',
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
        title: 'User Conduct',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              "Any form of misuse, malicious activities, or attempts to compromise our website's integrity is strictly forbidden.",
          },
          {
            _id: uuidv4(),
            listTitle:
              'Users are expected to communicate respectfully, avoiding any form of harassment or offensive behavior.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Поведінка користувача',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Будь-яка форма неналежного використання, зловмисних дій або спроб порушити цілісність нашого веб-сайту суворо заборонена.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Від користувачів очікується шанобливе спілкування, уникаючи будь-яких форм переслідування чи образливої поведінки.',
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
        title: 'Content Accuracy',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'We strive to provide accurate, up-to-date content. However, we cannot guarantee the infallibility of all information presented.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Users are urged to independently verify critical information before making decisions based on it.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Точність вмісту',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Ми прагнемо надавати точний, актуальний вміст. Однак ми не можемо гарантувати безпомилковість усієї наданої інформації.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Користувачів закликають самостійно перевіряти важливу інформацію, перш ніж приймати на її основі рішення.',
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
        title: 'External Links',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'The Foundation is not responsible for the content, authenticity, or reliability of any external website linked to our site.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Users are encouraged to exercise caution and read the terms and conditions and privacy policies of any external websites.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Зовнішні посилання',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Фонд не несе відповідальності за вміст, автентичність або надійність будь-якого зовнішнього веб-сайту, посилання на який є на нашому сайті.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Користувачам рекомендується проявляти обережність і ознайомитися з умовами та політикою конфіденційності будь-яких зовнішніх веб-сайтів.',
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
        title: 'Account Creation and Security',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Certain features might require users to create an account. Users are responsible for maintaining the confidentiality of their login credentials.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Users must promptly notify the Foundation of any breach of security or unauthorized use of their account.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Створення облікового запису та безпека',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Деякі функції можуть потребувати від користувачів створення облікового запису. Користувачі несуть відповідальність за збереження конфіденційності своїх облікових даних для входу.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Користувачі повинні негайно повідомляти Фонд про будь-яке порушення безпеки або несанкціоноване використання їх облікового запису.',
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
        title: 'Limitation of Liability',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'The Foundation assumes no responsibility for any direct, indirect, or consequential damages that may arise from the use of, or inability to use, this website.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Обмеження відповідальності',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Фонд не несе відповідальності за будь-які прямі, непрямі чи непрямі збитки, які можуть виникнути внаслідок використання або неможливості використання цього веб-сайту.',
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
        title: 'Service Interruptions',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              "The Foundation's website may occasionally undergo maintenance or face technical issues, leading to service interruptions. Users acknowledge that such instances, though regrettable, can occur.",
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Перебої в обслуговуванні',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Час від часу веб-сайт Фонду може проходити технічне обслуговування або виникати технічні проблеми, що призводять до перебоїв у роботі. Користувачі визнають, що такі випадки, хоч і прикро, але можуть траплятися.',
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
        title: 'Changes to Conditions',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'These conditions may be periodically reviewed and updated. Continued use of the website post-updates signifies acceptance of the revised conditions.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'We will make reasonable efforts to notify users of any significant changes to these conditions.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Зміни умов',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Ці умови можуть періодично переглядатися та оновлюватися. Продовження використання веб-сайту після оновлення означає прийняття змінених умов.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Ми докладемо всіх зусиль, щоб повідомити користувачів про будь-які значні зміни цих умов.',
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
        title: 'Termination',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'The Foundation reserves the right to terminate user access to the website without prior notice,  given breaches of these conditions.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Припинення',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Фонд залишає за собою право припинити доступ користувачів до веб-сайту без попереднього повідомлення в разі порушення цих умов.',
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
        title: 'Governing Law',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              "These conditions are governed by and construed in accordance with [Relevant Country's] laws. Disputes arising from these conditions will be exclusively subject to the jurisdiction of [Relevant Country's] courts.",
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Правом, що регулює',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Ці умови регулюються та тлумачаться відповідно до законів [відповідної країни]. Суперечки, що виникають із цих умов, підлягатимуть винятковій юрисдикції судів [відповідної країни].',
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
        title: 'Feedback and Complaints',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Users are encouraged to share their feedback, suggestions, or complaints. We commit to addressing such communications in a timely and constructive manner.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Відгуки та скарги',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Користувачам пропонується ділитися своїми відгуками, пропозиціями чи скаргами. Ми зобов’язуємося розглядати такі повідомлення своєчасно та конструктивно.',
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
        title: 'Cookies and Trackers',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'The website uses cookies and similar tracking mechanisms to enhance user experience. By using our site, you consent to our use of cookies in accordance with our [Cookie Policy](#).',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Файли cookie та трекери',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Веб-сайт використовує файли cookie та подібні механізми відстеження для покращення взаємодії з користувачем. Використовуючи наш сайт, ви погоджуєтеся на використання файлів cookie відповідно до нашої [Політики щодо файлів cookie](#).',
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
        title: 'Accessibility',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'The Foundation strives to make its website accessible to as many users as possible, including those with disabilities. If you face any accessibility issues, please contact our support.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Доступність',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Фонд прагне зробити свій веб-сайт доступним для якомога більшої кількості користувачів, у тому числі людей з обмеженими можливостями. Якщо у вас виникли проблеми з доступністю, зверніться до нашої служби підтримки.',
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
        title: 'Disclaimer',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'The views and opinions expressed on our website do not necessarily reflect those of the "I Will Help You Foundation" or its affiliates.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Відмова від відповідальності',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Погляди та думки, висловлені на нашому веб-сайті, не обов’язково відображають погляди «Фонду «Я допоможу тобі»» або його філій.',
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
        title: 'Donor Recognition',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              "Unless otherwise specified, we reserve the right to recognize donors on our platforms. If you'd prefer to remain anonymous, please indicate this when making a donation.",
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Визнання донорів',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Якщо не зазначено інше, ми залишаємо за собою право визнавати донорів на наших платформах. Якщо ви бажаєте залишитися анонімним, вкажіть це під час здійснення пожертви.',
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
        title: 'Contact',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'For any queries related to these conditions or the website, please reach out to our email - contact@iwillhelpyou.charity',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Контакти',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'З будь-якими запитаннями, пов’язаними з цими умовами або веб-сайтом, будь ласка, зв’яжіться з нашою електронною поштою - contact@iwillhelpyou.charity',
          },
        ],
      },
    ],
  },
];

export default conditionsData;
