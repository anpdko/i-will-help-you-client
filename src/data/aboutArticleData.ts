import { v4 as uuidv4 } from 'uuid';

export interface IListItem {
  _id: string;
  listTitle: string;
  subItems?: string[];
}
export interface ITranslation {
  language: 'en' | 'ua';
  description?: string;
  list?: IListItem[];
  title: string;
  subtitle: string;
  _id: string;
}

export interface IAboutArticleData {
  _id: string;
  section: string;
  translations: ITranslation[];
}

const aboutArticleData: IAboutArticleData[] = [
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Fund’s goals and vision',
        subtitle: 'Our goals and vision',
        description:
          'The main goal of the Fund is to provide assistance to Ukrainians by ensuring various forms of support, such as financial aid, job search, legal and psychological assistance, provision of necessary items, organization of educational events, and community initiatives to facilitate their daily lives and integration into society.  We encompass Ukrainians who have been forced to leave their place of residence due to a full-scale war and are currently in Europe or remaining in Ukraine.  Our vision involves creating a sustainable and friendly environment for Ukrainians in Europe and Ukraine, where every Ukrainian family and individual receives the proper support and opportunity to realize their potential.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Цілі та бачення Фонду',
        subtitle: 'Наші цілі та бачення',
        description:
          'Основною метою Фонду є надання допомоги українцям шляхом забезпечення різноманітних форм підтримки, таких як фінансова допомога, пошук роботи, юридична та психологічна допомога, забезпечення необхідними речами, організація освітніх заходів та громадські ініціативи для полегшення їх повсякденного життя. та інтеграція в суспільство.  Ми охоплюємо українців, які через повномасштабну війну були змушені залишити місце проживання та зараз перебувають у Європі або залишаються в Україні.  Наше бачення передбачає створення сталого та дружнього середовища для українців у Європі та Україні, де кожна українська родина та кожна особа отримує належну підтримку та можливість реалізувати свій потенціал.',
      },
    ],
    _id: uuidv4(),
    section: 'goals_and_vision',
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Our team',
        subtitle: 'About our team',
        description:
          "We may be newcomers to the world of charity and aid, but our passion knows no bounds. We are a dedicated team of more than 15 volunteers, each driven by the desire to make a difference. Right now, we're working solely for the priceless rewards of smiles and kind words.  Our journey has just begun, and there's a world of opportunities ahead. We have numerous open positions waiting to be filled by those who share our enthusiasm for creating positive change.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Наша команда',
        subtitle: 'Про нашу команду',
        description:
          'Ми можемо новачки у світі благодійності та допомоги, але наша пристрасть не має меж. Ми — віддана команда з понад 15 волонтерів, кожен з яких керований бажанням змінити ситуацію. Зараз ми працюємо виключно заради безцінної нагороди посмішок і добрих слів.  Наша подорож тільки почалася, і попереду є світ можливостей. У нас є багато відкритих вакансій, які чекають на заповнення тими, хто поділяє наш ентузіазм у створенні позитивних змін.',
      },
    ],
    _id: uuidv4(),
    section: 'our_team',
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Areas of Foundation Activity',
        subtitle: 'About Our Activities',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Humanitarian Aid: The foundation aims to provide direct assistance in the form of food, clothing, money, and other essential resources to Ukrainians affected by the war.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Support Services: This encompasses a broad range of assistance, including:',
            subItems: [
              'Legal Support: Helping Ukrainians with documentation, understanding their legal status,and navigating other legal challenges they might face',
              'Psychological Support: Offering counseling and other mental health services for those traumatized by the war and its aftermath. This includes specialized support for parents, children, and other vulnerable groups.',
              'Job Assistance: Assisting Ukrainians in finding employment, offering professional development opportunities, and possibly partnering with companies willing to hire or train displaced individuals.',
            ],
          },
          {
            _id: uuidv4(),
            listTitle:
              'Education and Community Building: Organizing educational courses, workshops, and cultural events to foster a sense of community among the diaspora and help them integrate into their new environments. This can also serve to preserve and promote Ukrainian culture and heritage abroad.',
          },
          {
            _id: uuidv4(),
            listTitle:
              "Transparency and Oversight: Instituting robust financial monitoring mechanisms to ensure that all funds and resources are used effectively. This includes regular reporting on the foundation's activities and its financial status.",
          },
          {
            _id: uuidv4(),
            listTitle:
              "Donor Engagement and Fundraising: Actively seeking donations and other forms of support to fund the foundation's operations and programs.",
          },
          {
            _id: uuidv4(),
            listTitle:
              'Volunteer Program: Establishing and managing a program to recruit, train, and deploy volunteers who can assist in various capacities, be it on-the-ground aid distribution, counseling, administrative tasks, or other roles.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Partnership Development: Building relationships with other organizations, NGOs, and government entities to collaborate on projects, share resources, and exchange expertise to achieve common goals.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Awareness and Advocacy: Running campaigns to raise public awareness about the challenges faced by Ukrainians due to the war and advocating for their needs at various levels.',
          },
        ],
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Сфери діяльності фонду',
        subtitle: 'Про нашу діяльність',
        list: [
          {
            _id: uuidv4(),
            listTitle:
              'Гуманітарна допомога: Фонд прагне надавати безпосередню допомогу у вигляді їжі, одягу, грошей та інших основних ресурсів українцям, які постраждали від війни.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Підтримуючі послуги: Цей пункт охоплює широкий спектр допомоги, зокрема:',
            subItems: [
              'Юридична підтримка: Допомога українцям у питаннях  документації, розуміння їхнього юридичного статусу та подолання інших юридичних викликів, з якими вони можуть зіткнутися.',
              "Психологічна підтримка: Надання консультацій та інших послуг з психічного здоров'я для тих, хто травмований війною. Це включає спеціалізовану підтримку для батьків, дітей та інших уразливих груп.",
              'Допомога у пошуку роботи: Допомога українцям у пошуку роботи, надання можливостей для професійного розвитку та можливе партнерство з компаніями, які готові наймати або навчати переміщених осіб.12',
            ],
          },
          {
            _id: uuidv4(),
            listTitle:
              'Освіта та розбудова громади: Організація освітніх курсів, семінарів та культурних заходів для зміцнення почуття спільноти серед діаспори та допомоги їм інтегруватися в нове середовище. Це також може слугувати збереженню та популяризації української культури та спадщини за кордоном.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Прозорість та контроль: Запровадження надійних механізмів фінансового моніторингу для забезпечення ефективного використання всіх коштів і ресурсів. Це включає регулярне звітування про діяльність фонду та його фінансовий стан.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Залучення донорів та збір коштів: Активний пошук пожертв та інших форм підтримки для фінансування діяльності та програм фонду.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Волонтерська програма: Створення та управління програмою з набору, навчання та залучення волонтерів, які можуть  допомагати в різних сферах, будь то розподіл допомоги на місцях, консультування, адміністративні завдання або інші ролі.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Розвиток партнерства: Побудова відносин з іншими організаціями, неурядовими організаціями та державними установами для співпраці над проектами, спільного використання ресурсів та обміну досвідом для досягнення спільних цілей.',
          },
          {
            _id: uuidv4(),
            listTitle:
              'Підвищення обізнаності та захист прав: Проведення кампаній з підвищення обізнаності громадськості про проблеми, з якими стикаються українці через війну, та адвокація їхніх потреб на різних рівнях.',
          },
        ],
      },
    ],
    _id: uuidv4(),
    section: 'about_our_activities',
  },
];

export default aboutArticleData;
