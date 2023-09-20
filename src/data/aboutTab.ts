export interface ITranslation {
  language: 'en' | 'ua';
  description: string;
  title: string;
  tabName: string;
}

export interface ITabName {
  id: string;
  tabIcon: string;
  link: string;
  translations: ITranslation[];
}

const aboutTab: ITabName[] = [
  {
    translations: [
      {
        language: 'en',
        tabName: 'Mission',
        title: 'Our Mission',
        description:
          'To assist Ukrainians worldwide in overcoming the aftermath of the war by providing a diverse range of support, including addressing basic needs, legal and psychological aid, job search assistance, and facilitating their integration into new environments.',
      },
      {
        language: 'ua',
        tabName: 'Місія',
        title: 'Наша Місія',
        description:
          'Допомогти українцям у всьому світі подолати наслідки війни, надаючи різноманітну підтримку, включаючи задоволення базових потреб, юридичну та психологічну допомогу, допомогу в пошуку роботи та сприяння інтеграції в нове середовище.',
      },
    ],
    id: 'mission',
    tabIcon: '#mission',
    link: '/needhelp',
  },
  {
    translations: [
      {
        language: 'en',
        tabName: 'Vision',
        title: 'Our Vision',
        description:
          'To create a resilient and friendly environment for Ukrainians everywhere, where each individual has the opportunity to realize their potential, receiving the necessary support in the face of war and societal challenges.',
      },
      {
        language: 'ua',
        tabName: 'Бачення',
        title: 'Наше Бачення',
        description:
          'Створити стійке та дружнє середовище для українців у всьому світі, де кожен українець має можливість реалізувати свій потенціал, отримавши необхідну підтримку в умовах війни та суспільних викликів.',
      },
    ],
    id: 'vision',
    tabIcon: '#vision',
    link: '/needhelp',
  },
  {
    translations: [
      {
        language: 'en',
        tabName: 'Key Objectives',
        title: 'Key Objectives',
        description: `1. Address the basic needs of Ukrainians worldwide: food, clothing, money, and other essential resources.
      2. Assistance in job searching and professional development.
      3. Legal support: assistance with documentation, status, and other legal matters.
      4. Psychological support for various citizens' categories: parents, children, etc.
      5. Organizing educational courses, clubs, and other events to integrate and develop the Ukrainian diaspora.
      6. Efficient financial oversight and transparency in reporting.
      7. Regularly informing the public about the foundation's activities and financial state.
      8. Engaging donors and contributions to support the foundation's operations.
      9. Organizing a volunteer program to assist Ukrainians.
      10. Establishing partnerships with other organizations and government institutions for collaborative project implementation.      
      11. Raising public awareness about the needs of Ukrainians and promoting their integration.`,
      },
      {
        language: 'ua',
        tabName: 'Ключові Цілі',
        title: 'Ключові Цілі',
        description: `1. Задоволення базових потреб українців у всьому світі: їжа, одяг, гроші та інші необхідні ресурси.
        2. Допомога у пошуку роботи та професійному розвитку.
        3. Юридична підтримка: допомога з документацією, статусом та іншими правовими питаннями.
        4. Психологічна підтримка для різних категорій громадян: батьків, дітей та ін.
        5. Організація навчальних курсів, гуртків та інших заходів для інтеграції та розвитку української діаспори.
        6. Ефективний фінансовий контроль та прозорість звітності.
        7. Регулярне інформування громадськості про діяльність та фінансовий стан фонду.
        8. Залучення донорів та пожертвувань для підтримки діяльності фонду.
        9. Організація волонтерської програми для допомоги українцям.
        10. Встановлення партнерських відносин з іншими організаціями та державними установами для спільної реалізації проєктів.
        11. Підвищення обізнаності громадськості про потреби українців та сприяння їхній інтеграції.`,
      },
    ],
    id: 'objectives',
    tabIcon: '#objectives',
    link: '/needhelp',
  },
  {
    translations: [
      {
        language: 'en',
        tabName: 'Core Values',
        title: 'Core Values',
        description:
          'Compassion, Empowerment, Inclusivity, Collaboration, and Resilience. Guided by these principles, we strive for excellence in all endeavors.',
      },
      {
        language: 'ua',
        tabName: 'Основні Цінності',
        title: 'Основні Цінності',
        description:
          'Співчуття, розширення можливостей, інклюзивність, співпраця та стійкість. Керуючись цими принципами, ми прагнемо досягти досконалості в усіх починаннях.',
      },
    ],
    id: 'values',
    tabIcon: '#values',
    link: '/needhelp',
  },
  {
    translations: [
      {
        language: 'en',
        tabName: 'Our Impact',
        title: 'Our Impact',
        description:
          'Provide a summary of the impact the foundation has made so far. Include statistics, success stories, and achievements that demonstrate the positive outcomes of your projects and initiatives.',
      },
      {
        language: 'ua',
        tabName: 'Наш Вплив',
        title: 'Наш Вплив',
        description:
          'Надайте стислий опис впливу фонду на цей час. Додайте статистичні дані, історії успіху та досягнення, які демонструють позитивні результати ваших проектів та ініціатив.',
      },
    ],
    id: 'impact',
    tabIcon: '#impact',
    link: '/needhelp',
  },
  {
    translations: [
      {
        language: 'en',
        tabName: 'Join Our Journey',
        title: 'Make a Difference Today!',
        description:
          'Charity Foundation ”I Will Help You” is more than a foundation; it is a community of compassionate individuals who believe in the transformative power of healing. By joining our journey, you become part of a collective force working tirelessly to rebuild shattered lives and restore hope. Through your support, we can offer essential sustenance, education, mental health care, and meaningful opportunities to those who need it most. Together, we heal the wounds of war, mend broken dreams, and illuminate a path of resilience. Embark on this remarkable journey with us and witness the profound impact we can create together.',
      },
      {
        language: 'ua',
        tabName: 'Приєднуйся До Нас',
        title: 'Роби зміни вже сьогодні!',
        description:
          'Благодійний фонд «I Will Help You» – це більше ніж фонд; це спільнота милосердних людей, які вірять у трансформаційну силу зцілення. Приєднавшись до нас, ви станете частиною колективної сили, яка неустанно працює, щоб відновити зруйновані життя та повернути надію. Завдяки вашій підтримці ми можемо запропонувати необхідні засоби для існування, освіту, психічний догляд та значущі можливості тим, хто цього найбільше потребує. Разом ми загоюємо рани війни, відновлюємо зруйновані мрії та освітлюємо шлях стійкості. Вирушайте в цю неймовірну подорож разом з нами та переконайтесь у значимості змін, які ми можемо створити разом.',
      },
    ],
    id: 'journey',
    tabIcon: '#journey',
    link: '/needhelp',
  },
];

export default aboutTab;
