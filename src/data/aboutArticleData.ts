export interface ITranslation {
  language: 'en' | 'ua';
  description: string;
  title: string;
  subtitle: string;
}

export interface IAboutArticleData {
  id: string;
  translations: ITranslation[];
}

const aboutArticleData: IAboutArticleData[] = [
  {
    translations: [
      {
        language: 'en',
        title: 'Fund’s goals and vision',
        subtitle: 'Our goals and vision',
        description:
          'The main goal of the Fund is to provide assistance to Ukrainians by ensuring various forms of support, such as financial aid, job search, legal and psychological assistance, provision of necessary items, organization of educational events, and community initiatives to facilitate their daily lives and integration into society.  We encompass Ukrainians who have been forced to leave their place of residence due to a full-scale war and are currently in Europe or remaining in Ukraine.  Our vision involves creating a sustainable and friendly environment for Ukrainians in Europe and Ukraine, where every Ukrainian family and individual receives the proper support and opportunity to realize their potential.',
      },
      {
        language: 'ua',
        title: 'Цілі та бачення Фонду',
        subtitle: 'Наші цілі та бачення',
        description:
          'Основною метою Фонду є надання допомоги українцям шляхом забезпечення різноманітних форм підтримки, таких як фінансова допомога, пошук роботи, юридична та психологічна допомога, забезпечення необхідними речами, організація освітніх заходів та громадські ініціативи для полегшення їх повсякденного життя. та інтеграція в суспільство.  Ми охоплюємо українців, які через повномасштабну війну були змушені залишити місце проживання та зараз перебувають у Європі або залишаються в Україні.  Наше бачення передбачає створення сталого та дружнього середовища для українців у Європі та Україні, де кожна українська родина та кожна особа отримує належну підтримку та можливість реалізувати свій потенціал.',
      },
    ],
    id: 'goals_and_vision',
  },
  {
    translations: [
      {
        language: 'en',
        title: 'Our team',
        subtitle: 'About our team',
        description:
          "We may be newcomers to the world of charity and aid, but our passion knows no bounds. We are a dedicated team of more than 15 volunteers, each driven by the desire to make a difference. Right now, we're working solely for the priceless rewards of smiles and kind words.  Our journey has just begun, and there's a world of opportunities ahead. We have numerous open positions waiting to be filled by those who share our enthusiasm for creating positive change.",
      },
      {
        language: 'ua',
        title: 'Наша команда',
        subtitle: 'Про нашу команду',
        description:
          'Ми можемо новачки у світі благодійності та допомоги, але наша пристрасть не має меж. Ми — віддана команда з понад 15 волонтерів, кожен з яких керований бажанням змінити ситуацію. Зараз ми працюємо виключно заради безцінної нагороди посмішок і добрих слів.  Наша подорож тільки почалася, і попереду є світ можливостей. У нас є багато відкритих вакансій, які чекають на заповнення тими, хто поділяє наш ентузіазм у створенні позитивних змін.',
      },
    ],
    id: 'our_team',
  },
  {
    translations: [
      {
        language: 'en',
        title: 'Our Objectives',
        subtitle: 'Objectives',
        description:
          "Assisting in job search and professional development. Legal support for Ukrainians regarding documentation, status, and other legal aspects. Psychological support for parents, children, and general psychological assistance. Organizing educational courses, clubs, and other initiatives for the integration and development of the Ukrainian community. Ensuring effective financial control and reporting to maintain transparency in the use of the fund's resources. Regularly publishing reports on activities and financial status for the public, donors,and interested parties. Actively engaging donors and seeking donations to support the fund's activities. Establishing a volunteer program to involve volunteers in various directions of the fund. Establishing partnerships with other organizations and government institutions for joint project implementation and resource exchange, as well as sharing expertise to achieve common goals. Raising public awareness about the needs and challenges of Ukrainians in Europe and Ukraine and promoting their integration and development in the context of war and social challenges.",
      },
      {
        language: 'ua',
        title: 'Наша команда',
        subtitle: 'Цілі',
        description:
          'Допомога в пошуку роботи та професійному розвитку. Юридичний супровід українців щодо оформлення документів, статусу та інших правових аспектів. Психологічний супровід батьків, дітей, загальна психологічна допомога. Організація освітніх курсів, клубів та інших ініціатив для інтеграції та розвитку української громади. Забезпечення ефективного фінансового контролю та звітності для забезпечення прозорості використання ресурсів фонду. Регулярна публікація звітів про діяльність та фінансовий стан для громадськості, донорів та зацікавлених сторін. Активне залучення донорів та пошук пожертвувань для підтримки діяльності фонду. Створення волонтерської програми для залучення волонтерів до різних напрямків діяльності фонду. Встановлення партнерства з іншими організаціями та державними установами для спільної реалізації проектів та обміну ресурсами, а також обміну досвідом для досягнення спільних цілей. Підвищення обізнаності громадськості про потреби та виклики українців у Європі та Україні та сприяння їх інтеграції та розвитку в умовах війни та соціальних викликів.',
      },
    ],
    id: 'our_objectives',
  },
];

export default aboutArticleData;
