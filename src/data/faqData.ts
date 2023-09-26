import { v4 as uuidv4 } from 'uuid';

export interface ITranslation {
  language: 'en' | 'ua';
  description?: string;
  title: string;
  _id: string;
}
export interface IFaqData {
  _id: string;
  translations: ITranslation[];
}

export const faqVolunteerData: IFaqData[] = [
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How can I become a volunteer with your organization?',
        description:
          "You can start by filling out our volunteer form on our website. We'll review your application and get in touch with you regarding potential opportunities.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як я можу стати волонтером у вашій організації?',
        description:
          'Ви можете почати із заповнення форми волонтера на нашому сайті. Ми розглянемо вашу заявку та зв’яжемося з вами щодо потенційних можливостей.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What types of volunteer roles are available?',
        description:
          'We offer a variety of roles, including social media management, event planning, content creation, and more. You can choose a role that aligns with your skills and interests.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Які типи ролей волонтера доступні?',
        description:
          'Ми пропонуємо різноманітні ролі, зокрема керування соціальними мережами, планування заходів, створення контенту тощо. Ви можете вибрати роль, яка відповідає вашим навичкам та інтересам.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How much time commitment is expected from volunteers?',
        description:
          'The time commitment varies based on the role and project. Some roles require a few hours a week, while others might be project-specific with a set timeframe.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Скільки часу очікується від волонтерів?',
        description:
          'Час залежить від ролі та проекту. Деякі ролі вимагають кілька годин на тиждень, а інші можуть стосуватися конкретного проекту з установленим часовим проміжком.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I volunteer remotely?',
        description:
          'Yes, many of our roles can be done remotely. We value both local and remote volunteers who contribute to our initiatives.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можу я волонтерити віддалено?',
        description:
          'Так, багато наших ролей можна виконувати віддалено. Ми цінуємо як місцевих, так і віддалених волонтерів, які роблять внесок у наші ініціативи.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Do I need previous experience to volunteer?',
        description:
          "While previous experience can be helpful, it's not always necessary. We provide training and guidance for our volunteers to excel in their roles.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи потрібен мені попередній досвід для волонтерства?',
        description:
          'Хоча попередній досвід може бути корисним, він не завжди необхідний. Ми забезпечуємо тренінги та настанови для наших волонтерів, щоб досягти успіху у своїх ролях.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What impact will my volunteer work have?',
        description:
          "Your work will directly contribute to our organization's mission. Whether it's raising awareness, providing support, or creating content, your efforts matter.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Який вплив матиме моя волонтерська робота?',
        description:
          'Ваша робота безпосередньо сприятиме місії нашої організації. Будь то підвищення обізнаності, надання підтримки чи створення контенту, ваші зусилля мають значення.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Is there an age requirement for volunteers?',
        description:
          'We welcome volunteers of all ages. Some roles may have specific age restrictions due to the nature of the tasks involved.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи є вікові вимоги для волонтерів?',
        description:
          'Запрошуємо волонтерів різного віку. Деякі ролі можуть мати певні вікові обмеження через характер поставлених завдань.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Will I receive any training as a volunteer?',
        description:
          'Yes, we provide training and orientation for our volunteers to help them understand their roles and responsibilities.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи пройду я навчання як волонтер?',
        description:
          'Так, ми проводимо навчання та інструктаж для наших волонтерів, щоб допомогти їм зрозуміти свої ролі та обов’язки.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title:
          'How can I make a difference as a volunteer with a psychological background?',
        description:
          'If you have a background in psychology, you can provide invaluable support in offering counseling, emotional assistance, and creating content related to mental health awareness in our initiatives.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title:
          'Як я можу змінити ситуацію як волонтер із психологічною підготовкою?',
        description:
          'Якщо у вас є психологічний досвід, ви можете надати неоціненну підтримку, пропонуючи консультації, емоційну допомогу та створюючи контент, пов’язаний з обізнаністю про психічне здоров’я в наших ініціативах.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: "What is the focus of your foundation's work?",
        description:
          'Our foundation is dedicated to assisting Ukrainians affected by war globally. Our initiatives extend across regions to support those in need due to war.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Який фокус роботи вашого фонду?',
        description:
          'Наш фонд спрямований на допомогу українцям, які постраждали від війни в усьому світі. Наші ініціативи поширюються на всі регіони, щоб підтримати тих, хто потребує допомоги через війну.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can volunteers be from anywhere in the world?',
        description:
          'Absolutely, we welcome volunteers from around the world who are passionate about making a difference in the lives of Ukrainians impacted by war.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можуть бути волонтери з будь-якої точки світу?',
        description:
          'Звичайно, ми вітаємо волонтерів з усього світу, які прагнуть змінити життя українців, які постраждали від війни.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title:
          'How flexible is the volunteer commitment in terms of time and days?',
        description:
          'We understand the diverse schedules of our volunteers. You can choose the amount of time and specific days that suit your availability and contribute effectively.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Наскільки гнучкими є зобов’язання волонтера щодо часу та днів?',
        description:
          'Ми розуміємо різноманітність графіків наших волонтерів. Ви можете вибрати проміжок часу та конкретні дні відповідно до вашої доступності та ефективно сприяти.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I take on multiple volunteer roles?',
        description:
          'Yes, you have the flexibility to engage in multiple roles based on your skills and interests, helping us across various projects.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можу я взяти на себе кілька ролей волонтера?',
        description:
          'Так, у вас є можливість брати участь у кількох ролях залежно від ваших навичок та інтересів, допомагаючи нам у різних проектах.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What are the different programs the foundation offers?',
        description:
          'We have a wide range of programs aimed at assisting those in need. These programs include legal support, psychological assistance, educational support, food provision, and more.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Які різні програми пропонує фонд?',
        description:
          'У нас є широкий спектр програм, спрямованих на допомогу нужденним. Ці програми включають юридичну підтримку, психологічну допомогу, освітню підтримку, забезпечення харчуванням тощо.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What kind of impact can my volunteer work have?',
        description:
          'Your volunteer efforts will directly contribute to providing essential aid, support, and assistance to Ukrainians facing challenges due to war.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Який вплив може мати моя волонтерська робота?',
        description:
          'Ваші волонтерські зусилля безпосередньо сприятимуть наданню необхідної допомоги, підтримки та сприяння українцям, які стикаються з труднощами через війну.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How can I get involved and make a difference?',
        description:
          'By participating in our various programs, you can help provide legal guidance, emotional support, education, and sustenance to those in need, ultimately making a positive impact on their lives.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як я можу взяти участь і змінити ситуацію?',
        description:
          'Беручи участь у наших різноманітних програмах, ви можете допомогти надати юридичні рекомендації, емоційну підтримку, освіту та засоби до існування тим, хто цього потребує, що зрештою позитивно вплине на їх життя.',
      },
    ],
    _id: uuidv4(),
  },
];

export const faqDonateData: IFaqData[] = [
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How can I make a donation to your foundation?',
        description:
          'You can make a donation by visiting our donation page and selecting the preferred donation method.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як я можу зробити пожертву вашому фонду?',
        description:
          'Ви можете зробити пожертву, відвідавши нашу сторінку пожертвувань і вибравши потрібний спосіб пожертвування.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What donation options are available?',
        description:
          'We offer one-time donations, monthly subscription options, and the flexibility to donate in various currencies, including cryptocurrency.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Які варіанти пожертвування доступні?',
        description:
          'Ми пропонуємо одноразові пожертви, варіанти місячної підписки та гнучкість пожертвувань у різних валютах, включаючи криптовалюту.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I make a one-time donation?',
        description:
          'Yes, you can choose to make a one-time donation of any amount that you wish to contribute.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можу я зробити одноразову пожертву?',
        description:
          'Так, ви можете зробити одноразову пожертву на будь-яку суму, яку бажаєте зробити.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I set up a monthly donation?',
        description:
          'Absolutely, you can opt for a monthly subscription to support our ongoing initiatives.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можу я встановити щомісячну пожертву?',
        description:
          'Звичайно, ви можете обрати місячну підписку, щоб підтримати наші поточні ініціативи.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What currencies can I use to make a donation?',
        description:
          'We accept donations in multiple currencies. You can select your preferred currency during the donation process.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'У якій валюті я можу зробити пожертву?',
        description:
          'Ми приймаємо пожертви в різних валютах. Ви можете вибрати бажану валюту під час процесу пожертвування.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I donate cryptocurrency?',
        description:
          ' Yes, we accept cryptocurrency donations. You will find relevant information for cryptocurrency donations on our donation page.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можу я пожертвувати криптовалюту?',
        description:
          'Так, ми приймаємо пожертви в криптовалюті. Ви знайдете актуальну інформацію про пожертви в криптовалюті на нашій сторінці пожертвувань.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I donate non-monetary items like clothes and food?',
        description:
          'Yes, we welcome non-monetary donations such as clothes, food, and other essentials. Details about where to send such donations will be provided upon selection.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можу я пожертвувати негрошові предмети, такі як одяг і їжа?',
        description:
          'Так, ми вітаємо негрошові пожертви, такі як одяг, їжа та інші речі першої необхідності. Подробиці про те, куди надсилати такі пожертви, буде надано після вибору.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What if I want to donate to a company?',
        description:
          'Both individuals and companies can donate. For companies, if you want to discuss specific partnership conditions, please provide your contact details, and we will get in touch.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Що робити, якщо я хочу зробити пожертву від компанії?',
        description:
          'Пожертвувати можуть як фізичні особи, так і компанії. Для компаній, якщо ви хочете обговорити конкретні умови партнерства, будь ласка, вкажіть свої контактні дані, і ми зв’яжемося.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Is my personal information secure when making a donation?',
        description:
          'Yes, we take donor privacy seriously. Your information will be securely stored. However, if you wish to be listed in our official donor list, please contact us directly.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title:
          'Чи захищена моя особиста інформація під час здійснення пожертви?',
        description:
          'Так, ми серйозно ставимося до конфіденційності донорів. Ваша інформація буде надійно збережена. Однак, якщо ви бажаєте бути внесеним до нашого офіційного списку донорів, зв’яжіться з нами напряму.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I specify how I want my donation to be used?',
        description:
          'Yes, you can indicate your preference during the donation process. If you have specific conditions, please contact us for a discussion.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title:
          'Чи можу я вказати, як я хочу, щоб моя пожертва була використана?',
        description:
          "Так, ви можете вказати свої переваги під час процесу пожертвування. Якщо у вас є конкретні умови, зв'яжіться з нами для обговорення.",
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What if I want to donate in-kind items?',
        description:
          ' You can choose to donate physical items like clothing and food. We will provide the necessary details for item donations.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Що робити, якщо я хочу пожертвувати речі в натуральній формі?',
        description:
          'Ви можете пожертвувати фізичні речі, наприклад одяг і їжу. Ми надамо необхідні деталі для пожертвування речей.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How do I know my donation has been received?',
        description:
          'You will receive a confirmation email once your donation is processed. If you need further assistance, feel free to reach out.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як дізнатися, що моя пожертва отримана?',
        description:
          'Ви отримаєте електронний лист із підтвердженням, коли вашу пожертву буде оброблено. Якщо вам потрібна додаткова допомога, не соромтеся звертатися.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I donate from any country?',
        description:
          'Yes, we welcome donations from individuals and companies worldwide. We appreciate your support, regardless of your location.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можу я пожертвувати з будь-якої країни?',
        description:
          'Так, ми вітаємо пожертви від окремих осіб і компаній з усього світу. Ми цінуємо вашу підтримку, незалежно від вашого місцезнаходження.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I receive a donation receipt for tax purposes?',
        description:
          'Yes, we can provide donation receipts for tax purposes upon request. Please ensure you provide accurate contact information.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title:
          'Чи можу я отримати квитанцію про пожертву для цілей оподаткування?',
        description:
          'Так, ми можемо надати квитанції про пожертвування для цілей оподаткування за запитом. Переконайтеся, що ви надали точну контактну інформацію.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How can I be included in the official list of donors?',
        description:
          'If you wish to be listed in our official donor roster, please inquire about it, and we will provide the necessary information.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як мене включити в офіційний список донорів?',
        description:
          'Якщо ви хочете бути внесеним до нашого офіційного реєстру донорів, будь ласка, запитайте про це, і ми надамо необхідну інформацію.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I modify my donation amount or subscription?',
        description:
          'Yes, you can modify your donation amount or subscription at any time by accessing your donor account.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можу я змінити суму пожертви або підписку?',
        description:
          'Так, ви можете будь-коли змінити суму пожертви або підписку, увійшовши до свого донорського облікового запису.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can companies choose to sponsor specific projects?',
        description:
          'Yes, companies interested in sponsoring particular projects can contact us to discuss partnership details and project-specific contributions.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можуть компанії вибрати спонсорство конкретних проектів?',
        description:
          'Так, компанії, зацікавлені у спонсоруванні певних проектів, можуть зв’язатися з нами, щоб обговорити деталі партнерства та внески в конкретний проект.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can companies choose to sponsor specific projects?',
        description:
          'Yes, companies interested in sponsoring particular projects can contact us to discuss partnership details and project-specific contributions.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можуть компанії вибрати спонсорство конкретних проектів?',
        description:
          'Так, компанії, зацікавлені у спонсоруванні певних проектів, можуть зв’язатися з нами, щоб обговорити деталі партнерства та внески в конкретний проект.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: ' Is there a minimum donation amount?',
        description:
          'No, there is no minimum donation requirement. Every contribution, regardless of its size, makes a difference.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи існує мінімальна сума пожертви?',
        description:
          'Ні, мінімальних вимог щодо пожертвувань немає. Кожен внесок, незалежно від його розміру, має значення.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: ' Is there a minimum donation amount?',
        description:
          'No, there is no minimum donation requirement. Every contribution, regardless of its size, makes a difference.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи існує мінімальна сума пожертви?',
        description:
          'Ні, мінімальних вимог щодо пожертвувань немає. Кожен внесок, незалежно від його розміру, має значення.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How can I ensure my donation reaches those in need?',
        description:
          'Your donation will be allocated according to the program you select. Our transparent reporting keeps you informed about the impact of your contribution.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title:
          'Як я можу переконатися, що моя пожертва досягне тих, хто її потребує?',
        description:
          'Ваша пожертва буде розподілена відповідно до обраної вами програми. Наша прозора звітність інформує вас про вплив вашого внеску.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I get updates on the foundation activities after donating',
        description:
          'Absolutely, we provide regular updates on our website and through newsletters to keep you informed about how your contribution is making a positive impact.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title:
          'Чи можу я отримувати оновлення щодо діяльності фонду після пожертви',
        description:
          'Звичайно, ми регулярно оновлюємо інформацію на нашому веб-сайті та в інформаційних бюлетенях, щоб інформувати вас про те, як ваш внесок справляє позитивний вплив.',
      },
    ],
    _id: uuidv4(),
  },
];
export const faqData: IFaqData[] = [
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What is the "I Will Help You" Foundation?',
        description:
          'The "I Will Help You" Foundation is a humanitarian organization dedicated to assisting Ukrainians affected by the war, wherever they are in the world.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Що таке фонд «Я допоможу тобі»?',
        description:
          'Фонд «Я тобі допоможу» — це гуманітарна організація, яка займається допомогою постраждалим від війни українцям, де б вони не були.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What is the mission of the foundation?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Яка місія фонду?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: "What is the foundation's vision?",
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Яке бачення фонду?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What kind of humanitarian aid does the foundation provide?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Яку гуманітарну допомогу надає фонд?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What support services are available?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Які послуги підтримки доступні?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can the foundation help with legal challenges?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи може фонд допомогти з судовими проблемами?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title:
          'How does the foundation support the mental well-being of Ukrainians?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як фонд підтримує психічне благополуччя українців?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Is there assistance for job-seeking Ukrainians?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи є допомога українцям, які шукають роботу?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title:
          'How does the foundation promote Ukrainian culture and heritage?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'к фонд популяризує українську культуру та спадщину?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How transparent is the foundation regarding its finances?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Наскільки фонд прозорий щодо своїх фінансів?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How can I donate to the foundation?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як я можу пожертвувати фонду?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Are there volunteering opportunities?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи є можливості для волонтерства?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Are there volunteering opportunities?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи є можливості для волонтерства?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: "How can I raise awareness about the foundation's efforts?",
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як я можу підвищити обізнаність про зусилля фонду?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title:
          'Where can I find more detailed information about the foundation?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Де можна знайти більш детальну інформацію про фонд?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How are the educational courses organized?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як організовані навчальні курси?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can non-Ukrainians volunteer or donate?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можуть неукраїнці бути волонтерами чи жертвувати?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How are the funds utilized?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як використовуються кошти?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How often are financial reports released?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як часто публікуються фінансові звіти?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Is the foundation registered and recognized officially?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи фонд зареєстрований та визнаний офіційно?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Who started the foundation?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Хто започаткував фонд?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How can I get involved?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як я можу взяти участь?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Are there any physical offices I can visit?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи є фізичні офіси, які я можу відвідати?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title:
          'How can I get psychological support for a friend affected by the war?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title:
          'Як я можу отримати психологічну підтримку для друга, який постраждав від війни?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Do you have resources for children specifically?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи є у вас ресурси спеціально для дітей?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title:
          'How does the foundation ensure the quality of its support services?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Яким чином фонд забезпечує якість своїх послуг підтримки?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title:
          'How does the foundation ensure the quality of its support services?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Яким чином фонд забезпечує якість своїх послуг підтримки?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Are donations tax-deductible?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи оподатковуються пожертви?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How does the foundation engage with local communities?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як фонд взаємодіє з місцевими громадами?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I suggest a project or initiative for the foundation?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можу я запропонувати проект чи ініціативу для фонду?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Are there any upcoming events?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи є якісь найближчі події?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How does the foundation manage its volunteers?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як фонд керує своїми волонтерами?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: "What's the foundation's stance on political involvement?",
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Яка позиція фонду щодо політичної участі?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How can businesses partner with the foundation?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як бізнес може співпрацювати з фондом?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Are there specific regions the foundation operates in?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи існують конкретні регіони, в яких працює фонд?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How can I get regular updates from the foundation?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як я можу отримувати регулярні оновлення від фонду?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'Can I choose a specific program to donate to?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Чи можу я вибрати конкретну програму для пожертвувань?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'How does the foundation handle data privacy?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'Як фонд забезпечує конфіденційність даних?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title: 'What challenges does the foundation currently face?',
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title: 'З якими викликами зараз стикається фонд?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        title:
          "How can I offer feedback or concerns about the foundation's operations?",
        description: '',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        title:
          'Як я можу надати відгук або занепокоєння щодо діяльності фонду?',
        description: '',
      },
    ],
    _id: uuidv4(),
  },
];
