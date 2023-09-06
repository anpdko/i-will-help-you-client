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
          "To stand as a guiding light for the millions of Ukrainians who sought refuge beyond their homeland's borders. We extend unwavering support, providing comprehensive assistance to navigate unfamiliar territories, and empowering individuals to rebuild with dignity and resilience.",
      },
      {
        language: 'ua',
        tabName: 'Місія',
        title: 'Наша Місія',
        description:
          'Стати вказівною зіркою для мільйонів українців, які шукають притулку за межами Батьківщини. Ми надаємо непохитну підтримку, забезпечуючи всебічну допомогу в орієнтуванні на незнайомих територіях і надаючи людям можливість відновлюватися з гідністю та стійкістю.',
      },
    ],
    id: 'mission',
    tabIcon: '#mission',
    link: '#',
  },
  {
    translations: [
      {
        language: 'en',
        tabName: 'Vision',
        title: 'Our Vision',
        description:
          'A future where every Ukrainian refugee can find solace in the assurance of competent legal aid, where creative expression thrives, where education knows no boundaries, and where opportunities abound for professional growth and fulfillment.',
      },
      {
        language: 'ua',
        tabName: 'Бачення',
        title: 'Наше Бачення',
        description:
          'Майбутнє, де кожен український біженець може знайти розраду в гарантії компетентної правової допомоги, де процвітає творче самовираження, де освіта не має меж та існують можливості для професійного зростання і реалізації.',
      },
    ],
    id: 'vision',
    tabIcon: '#vision',
    link: '#',
  },
  {
    translations: [
      {
        language: 'en',
        tabName: 'Key Objectives',
        title: 'Key Objectives',
        description: `1. Holistic Legal Assistance: Providing legal guidance to navigate foreign systems.
      2. Creative Empowerment: Enriching global discourse through Ukrainian creativity.
      3. Educational Rebuilding: Bridging educational gaps and nurturing a generation of scholars.
      4. Empowering Professional Growth: Connecting Ukrainians to meaningful work opportunities.
      5. Psychological Healing: Extending support and resources to overcome trauma.
      6. Sustainable Change: Cultivating lasting partnerships and continuous refinement.`,
      },
      {
        language: 'ua',
        tabName: 'Ключові Цілі',
        title: 'Ключові Цілі',
        description: `1. Комплексна юридична допомога: надання юридичних вказівок щодо навігації закордонними системами.
        2. Творча автономія: збагачення глобального дискурсу через українську творчість.
        3. Реконструкція освіти: заповнення освітніх прогалин і виховання покоління вчених.
        4. Заохочення професійного зростання: підключення українців до можливостей значущої роботи.
        5. Психологічне відновлення: надання підтримки та ресурсів для подолання травм.
        6. Стійкі зміни: розвиток тривалих партнерських відносин і постійне вдосконалення.`,
      },
    ],
    id: 'objectives',
    tabIcon: '#objectives',
    link: '#',
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
    link: '#',
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
    link: '#',
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
    link: '#',
  },
];

export default aboutTab;
