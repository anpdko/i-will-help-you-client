import { v4 as uuidv4 } from 'uuid';

export interface ITranslation {
  language: 'en' | 'ua';
  desc: string;
  tag: string;
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
        tag: 'How can I become a volunteer with your organization?',
        desc: "You can start by filling out our volunteer form on our website. We'll review your application and get in touch with you regarding potential opportunities.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як я можу стати волонтером у вашій організації?',
        desc: 'Ви можете почати із заповнення форми волонтера на нашому сайті. Ми розглянемо вашу заявку та зв’яжемося з вами щодо потенційних можливостей.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What types of volunteer roles are available?',
        desc: 'We offer a variety of roles, including social media management, event planning, content creation, and more. You can choose a role that aligns with your skills and interests.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Які типи ролей волонтера доступні?',
        desc: 'Ми пропонуємо різноманітні ролі, зокрема керування соціальними мережами, планування заходів, створення контенту тощо. Ви можете вибрати роль, яка відповідає вашим навичкам та інтересам.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How much time commitment is expected from volunteers?',
        desc: 'The time commitment varies based on the role and project. Some roles require a few hours a week, while others might be project-specific with a set timeframe.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Скільки часу очікується від волонтерів?',
        desc: 'Час залежить від ролі та проекту. Деякі ролі вимагають кілька годин на тиждень, а інші можуть стосуватися конкретного проекту з установленим часовим проміжком.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I volunteer remotely?',
        desc: 'Yes, many of our roles can be done remotely. We value both local and remote volunteers who contribute to our initiatives.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я волонтерити віддалено?',
        desc: 'Так, багато наших ролей можна виконувати віддалено. Ми цінуємо як місцевих, так і віддалених волонтерів, які роблять внесок у наші ініціативи.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Do I need previous experience to volunteer?',
        desc: "While previous experience can be helpful, it's not always necessary. We provide training and guidance for our volunteers to excel in their roles.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи потрібен мені попередній досвід для волонтерства?',
        desc: 'Хоча попередній досвід може бути корисним, він не завжди необхідний. Ми забезпечуємо тренінги та настанови для наших волонтерів, щоб досягти успіху у своїх ролях.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What impact will my volunteer work have?',
        desc: "Your work will directly contribute to our organization's mission. Whether it's raising awareness, providing support, or creating content, your efforts matter.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Який вплив матиме моя волонтерська робота?',
        desc: 'Ваша робота безпосередньо сприятиме місії нашої організації. Будь то підвищення обізнаності, надання підтримки чи створення контенту, ваші зусилля мають значення.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Is there an age requirement for volunteers?',
        desc: 'We welcome volunteers of all ages. Some roles may have specific age restrictions due to the nature of the tasks involved.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи є вікові вимоги для волонтерів?',
        desc: 'Запрошуємо волонтерів різного віку. Деякі ролі можуть мати певні вікові обмеження через характер поставлених завдань.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Will I receive any training as a volunteer?',
        desc: 'Yes, we provide training and orientation for our volunteers to help them understand their roles and responsibilities.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи пройду я навчання як волонтер?',
        desc: 'Так, ми проводимо навчання та інструктаж для наших волонтерів, щоб допомогти їм зрозуміти свої ролі та обов’язки.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How can I make a difference as a volunteer with a psychological background?',
        desc: 'If you have a background in psychology, you can provide invaluable support in offering counseling, emotional assistance, and creating content related to mental health awareness in our initiatives.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як я можу змінити ситуацію як волонтер із психологічною підготовкою?',
        desc: 'Якщо у вас є психологічний досвід, ви можете надати неоціненну підтримку, пропонуючи консультації, емоційну допомогу та створюючи контент, пов’язаний з обізнаністю про психічне здоров’я в наших ініціативах.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: "What is the focus of your foundation's work?",
        desc: 'Our foundation is dedicated to assisting Ukrainians affected by war globally. Our initiatives extend across regions to support those in need due to war.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Який фокус роботи вашого фонду?',
        desc: 'Наш фонд спрямований на допомогу українцям, які постраждали від війни в усьому світі. Наші ініціативи поширюються на всі регіони, щоб підтримати тих, хто потребує допомоги через війну.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can volunteers be from anywhere in the world?',
        desc: 'Absolutely, we welcome volunteers from around the world who are passionate about making a difference in the lives of Ukrainians impacted by war.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можуть бути волонтери з будь-якої точки світу?',
        desc: 'Звичайно, ми вітаємо волонтерів з усього світу, які прагнуть змінити життя українців, які постраждали від війни.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How flexible is the volunteer commitment in terms of time and days?',
        desc: 'We understand the diverse schedules of our volunteers. You can choose the amount of time and specific days that suit your availability and contribute effectively.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Наскільки гнучкими є зобов’язання волонтера щодо часу та днів?',
        desc: 'Ми розуміємо різноманітність графіків наших волонтерів. Ви можете вибрати проміжок часу та конкретні дні відповідно до вашої доступності та ефективно сприяти.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I take on multiple volunteer roles?',
        desc: 'Yes, you have the flexibility to engage in multiple roles based on your skills and interests, helping us across various projects.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я взяти на себе кілька ролей волонтера?',
        desc: 'Так, у вас є можливість брати участь у кількох ролях залежно від ваших навичок та інтересів, допомагаючи нам у різних проектах.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What are the different programs the foundation offers?',
        desc: 'We have a wide range of programs aimed at assisting those in need. These programs include legal support, psychological assistance, educational support, food provision, and more.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Які різні програми пропонує фонд?',
        desc: 'У нас є широкий спектр програм, спрямованих на допомогу нужденним. Ці програми включають юридичну підтримку, психологічну допомогу, освітню підтримку, забезпечення харчуванням тощо.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What kind of impact can my volunteer work have?',
        desc: 'Your volunteer efforts will directly contribute to providing essential aid, support, and assistance to Ukrainians facing challenges due to war.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Який вплив може мати моя волонтерська робота?',
        desc: 'Ваші волонтерські зусилля безпосередньо сприятимуть наданню необхідної допомоги, підтримки та сприяння українцям, які стикаються з труднощами через війну.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How can I get involved and make a difference?',
        desc: 'By participating in our various programs, you can help provide legal guidance, emotional support, education, and sustenance to those in need, ultimately making a positive impact on their lives.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як я можу взяти участь і змінити ситуацію?',
        desc: 'Беручи участь у наших різноманітних програмах, ви можете допомогти надати юридичні рекомендації, емоційну підтримку, освіту та засоби до існування тим, хто цього потребує, що зрештою позитивно вплине на їх життя.',
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
        tag: 'How can I make a donation to your foundation?',
        desc: 'You can make a donation by visiting our donation page and selecting the preferred donation method.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як я можу зробити пожертву вашому фонду?',
        desc: 'Ви можете зробити пожертву, відвідавши нашу сторінку пожертвувань і вибравши потрібний спосіб пожертвування.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What donation options are available?',
        desc: 'We offer one-time donations, monthly subscription options, and the flexibility to donate in various currencies, including cryptocurrency.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Які варіанти пожертвування доступні?',
        desc: 'Ми пропонуємо одноразові пожертви, варіанти місячної підписки та гнучкість пожертвувань у різних валютах, включаючи криптовалюту.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I make a one-time donation?',
        desc: 'Yes, you can choose to make a one-time donation of any amount that you wish to contribute.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я зробити одноразову пожертву?',
        desc: 'Так, ви можете зробити одноразову пожертву на будь-яку суму, яку бажаєте зробити.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I set up a monthly donation?',
        desc: 'Absolutely, you can opt for a monthly subscription to support our ongoing initiatives.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я встановити щомісячну пожертву?',
        desc: 'Звичайно, ви можете обрати місячну підписку, щоб підтримати наші поточні ініціативи.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What currencies can I use to make a donation?',
        desc: 'We accept donations in multiple currencies. You can select your preferred currency during the donation process.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'У якій валюті я можу зробити пожертву?',
        desc: 'Ми приймаємо пожертви в різних валютах. Ви можете вибрати бажану валюту під час процесу пожертвування.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I donate cryptocurrency?',
        desc: ' Yes, we accept cryptocurrency donations. You will find relevant information for cryptocurrency donations on our donation page.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я пожертвувати криптовалюту?',
        desc: 'Так, ми приймаємо пожертви в криптовалюті. Ви знайдете актуальну інформацію про пожертви в криптовалюті на нашій сторінці пожертвувань.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I donate non-monetary items like clothes and food?',
        desc: 'Yes, we welcome non-monetary donations such as clothes, food, and other essentials. Details about where to send such donations will be provided upon selection.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я пожертвувати негрошові предмети, такі як одяг і їжа?',
        desc: 'Так, ми вітаємо негрошові пожертви, такі як одяг, їжа та інші речі першої необхідності. Подробиці про те, куди надсилати такі пожертви, буде надано після вибору.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What if I want to donate to a company?',
        desc: 'Both individuals and companies can donate. For companies, if you want to discuss specific partnership conditions, please provide your contact details, and we will get in touch.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Що робити, якщо я хочу зробити пожертву від компанії?',
        desc: 'Пожертвувати можуть як фізичні особи, так і компанії. Для компаній, якщо ви хочете обговорити конкретні умови партнерства, будь ласка, вкажіть свої контактні дані, і ми зв’яжемося.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Is my personal information secure when making a donation?',
        desc: 'Yes, we take donor privacy seriously. Your information will be securely stored. However, if you wish to be listed in our official donor list, please contact us directly.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи захищена моя особиста інформація під час здійснення пожертви?',
        desc: 'Так, ми серйозно ставимося до конфіденційності донорів. Ваша інформація буде надійно збережена. Однак, якщо ви бажаєте бути внесеним до нашого офіційного списку донорів, зв’яжіться з нами напряму.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I specify how I want my donation to be used?',
        desc: 'Yes, you can indicate your preference during the donation process. If you have specific conditions, please contact us for a discussion.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я вказати, як я хочу, щоб моя пожертва була використана?',
        desc: "Так, ви можете вказати свої переваги під час процесу пожертвування. Якщо у вас є конкретні умови, зв'яжіться з нами для обговорення.",
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What if I want to donate in-kind items?',
        desc: ' You can choose to donate physical items like clothing and food. We will provide the necessary details for item donations.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Що робити, якщо я хочу пожертвувати речі в натуральній формі?',
        desc: 'Ви можете пожертвувати фізичні речі, наприклад одяг і їжу. Ми надамо необхідні деталі для пожертвування речей.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How do I know my donation has been received?',
        desc: 'You will receive a confirmation email once your donation is processed. If you need further assistance, feel free to reach out.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як дізнатися, що моя пожертва отримана?',
        desc: 'Ви отримаєте електронний лист із підтвердженням, коли вашу пожертву буде оброблено. Якщо вам потрібна додаткова допомога, не соромтеся звертатися.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I donate from any country?',
        desc: 'Yes, we welcome donations from individuals and companies worldwide. We appreciate your support, regardless of your location.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я пожертвувати з будь-якої країни?',
        desc: 'Так, ми вітаємо пожертви від окремих осіб і компаній з усього світу. Ми цінуємо вашу підтримку, незалежно від вашого місцезнаходження.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I receive a donation receipt for tax purposes?',
        desc: 'Yes, we can provide donation receipts for tax purposes upon request. Please ensure you provide accurate contact information.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я отримати квитанцію про пожертву для цілей оподаткування?',
        desc: 'Так, ми можемо надати квитанції про пожертвування для цілей оподаткування за запитом. Переконайтеся, що ви надали точну контактну інформацію.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How can I be included in the official list of donors?',
        desc: 'If you wish to be listed in our official donor roster, please inquire about it, and we will provide the necessary information.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як мене включити в офіційний список донорів?',
        desc: 'Якщо ви хочете бути внесеним до нашого офіційного реєстру донорів, будь ласка, запитайте про це, і ми надамо необхідну інформацію.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I modify my donation amount or subscription?',
        desc: 'Yes, you can modify your donation amount or subscription at any time by accessing your donor account.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я змінити суму пожертви або підписку?',
        desc: 'Так, ви можете будь-коли змінити суму пожертви або підписку, увійшовши до свого донорського облікового запису.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can companies choose to sponsor specific projects?',
        desc: 'Yes, companies interested in sponsoring particular projects can contact us to discuss partnership details and project-specific contributions.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можуть компанії вибрати спонсорство конкретних проектів?',
        desc: 'Так, компанії, зацікавлені у спонсоруванні певних проектів, можуть зв’язатися з нами, щоб обговорити деталі партнерства та внески в конкретний проект.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: ' Is there a minimum donation amount?',
        desc: 'No, there is no minimum donation requirement. Every contribution, regardless of its size, makes a difference.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи існує мінімальна сума пожертви?',
        desc: 'Ні, мінімальних вимог щодо пожертвувань немає. Кожен внесок, незалежно від його розміру, має значення.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How can I ensure my donation reaches those in need?',
        desc: 'Your donation will be allocated according to the program you select. Our transparent reporting keeps you informed about the impact of your contribution.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як я можу переконатися, що моя пожертва досягне тих, хто її потребує?',
        desc: 'Ваша пожертва буде розподілена відповідно до обраної вами програми. Наша прозора звітність інформує вас про вплив вашого внеску.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I get updates on the foundation activities after donating',
        desc: 'Absolutely, we provide regular updates on our website and through newsletters to keep you informed about how your contribution is making a positive impact.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я отримувати оновлення щодо діяльності фонду після пожертви',
        desc: 'Звичайно, ми регулярно оновлюємо інформацію на нашому веб-сайті та в інформаційних бюлетенях, щоб інформувати вас про те, як ваш внесок справляє позитивний вплив.',
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
        tag: 'What is the "I Will Help You" Foundation?',
        desc: 'The "I Will Help You" Foundation is a humanitarian organization dedicated to assisting Ukrainians affected by the war, wherever they are in the world.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Що таке фонд «Я допоможу тобі»?',
        desc: 'Фонд «Я тобі допоможу» — це гуманітарна організація, яка займається допомогою постраждалим від війни українцям, де б вони не були.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What is the mission of the foundation?',
        desc: 'To support Ukrainians globally in overcoming war aftermath, offering diverse aid such as basic necessities, legal and psychological help, job assistance, and aiding their integration into new societies.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Яка місія фонду?',
        desc: 'Підтримувати українців по всьому світу в подоланні наслідків війни, пропонуючи різноманітну допомогу, зокрема, предмети першої необхідності, юридичну та психологічну підтримку, допомогу в працевлаштуванні, а також сприяння інтеграції в нове суспільство',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: "What is the foundation's vision?",
        desc: 'To foster a supportive environment for Ukrainians everywhere, ensuring every individual can realize their potential amidst the challenges of war and societal changes.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Яке бачення фонду?',
        desc: 'Сприяти створенню сприятливого середовища для українців по всьому світу, щоб кожна людина могла реалізувати свій потенціал в умовах викликів війни та суспільних змін.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What kind of humanitarian aid does the foundation provide?',
        desc: 'We offer direct aid like food, clothing, money, and other essential resources to those affected by the war.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Яку гуманітарну допомогу надає фонд?',
        desc: 'Ми надаємо пряму допомогу продуктами харчування, одягом, грошима та іншими необхідними ресурсами тим, хто постраждав від війни.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What support services are available?',
        desc: 'We provide legal support, psychological counseling, and job assistance, among others.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Які послуги підтримки доступні?',
        desc: 'Ми надаємо юридичну підтримку, психологічні консультації та допомогу з працевлаштуванням.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can the foundation help with legal challenges?',
        desc: 'Yes, we assist Ukrainians with documentation, understanding their legal status, and other legal hurdles.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи може фонд допомогти з судовими проблемами?',
        desc: 'Так, ми допомагаємо українцям з документацією, розумінням свого правового статусу та іншими юридичними проблемами.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How does the foundation support the mental well-being of Ukrainians?',
        desc: 'We offer psychological support, counseling, and specialized services for various groups, including parents and children.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: "Чи підтримує фонд психічне здоров'я українців та у який спосіб?",
        desc: '',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Is there assistance for job-seeking Ukrainians?',
        desc: 'Absolutely! We aid in job searches, professional development opportunities, and partner with companies that can help.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи надається допомога українцям, які шукають роботу?',
        desc: 'Безумовно! Ми допомагаємо з пошуком роботи, можливостями професійного розвитку та співпрацюємо з компаніями, які можуть допомогти.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How does the foundation promote Ukrainian culture and heritage?',
        desc: 'Through educational courses, workshops, cultural events, and community-building activities.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як фонд популяризує українську культуру та спадщину? ',
        desc: 'Через освітні курси, майстер-класи, культурні заходи та діяльність з розбудови громад.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How transparent is the foundation regarding its finances?',
        desc: 'We prioritize financial transparency and have mechanisms for monitoring and regular reporting on our activities and financial state.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Наскільки прозорим є фонд щодо своїх фінансів?',
        desc: 'Ми надаємо пріоритет фінансовій прозорості та маємо механізми моніторингу та регулярного звітування про нашу діяльність та фінансовий стан.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How can I donate to the foundation?',
        desc: "Details for donation will be available on our website, and we're actively seeking support to fund our operations.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як я можу зробити пожертву фонду?',
        desc: 'Реквізити для пожертв будуть доступні на нашому сайті, ми активно шукаємо підтримку для фінансування нашої діяльності.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Are there volunteering opportunities?',
        desc: 'Yes, we have a program to recruit, train, and deploy volunteers in various capacities.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи є можливості для волонтерства?',
        desc: 'Так, у нас є програма з набору, навчання та залучення волонтерів на різних посадах.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Does the foundation collaborate with other organizations?',
        desc: 'Yes, we establish partnerships with NGOs, other organizations, and government entities to achieve common goals.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи співпрацює фонд з іншими організаціями? ',
        desc: 'Так, ми встановлюємо партнерські відносини з громадськими організаціями, державними установами  та іншими організаціями для досягнення спільних цілей.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: "How can I raise awareness about the foundation's efforts?",
        desc: 'You can share our campaigns, events, and materials that highlight the challenges faced by Ukrainians and advocate for their needs.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як я можу підвищити обізнаність людей про діяльність фонду? ',
        desc: 'Ви можете поширювати інформацію про наші кампанії, заходи та матеріали, які висвітлюють виклики, з якими стикаються українці, та відстоюють їхні потреби.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Where can I find more detailed information about the foundation?',
        desc: 'Please visit our official website or contact our support team for in-depth details on our mission, objectives, and programs.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Де я можу знайти більш детальну інформацію про фонд?',
        desc: "Будь ласка, відвідайте наш офіційний веб-сайт або зв'яжіться з нашою командою підтримки, щоб отримати детальну інформацію про нашу місію, цілі та програми.",
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How are the educational courses organized?',
        desc: "Courses are designed to foster community, aid integration, and promote Ukrainian culture. They're held both online and in physical locations.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як організовані освітні курси?',
        desc: 'Курси покликані сприяти розвитку громади, допомагати інтеграції та популяризувати українську культуру. Вони проводяться як онлайн, так і у фізичних локаціях.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can non-Ukrainians volunteer or donate?',
        desc: 'Absolutely! We welcome support from everyone who shares our vision and mission.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можуть неукраїнці бути волонтерами чи жертводавцями?',
        desc: 'Безумовно! Ми раді підтримці кожного, хто поділяє наше бачення та місію.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How are the funds utilized?',
        desc: 'Funds are used for humanitarian aid, support services, education, community building, and the operational costs of the foundation.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як використовуються кошти?',
        desc: 'Кошти використовуються на гуманітарну допомогу, допоміжні послуги, освіту, розбудову громад та операційні витрати фонду.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How often are financial reports released?',
        desc: 'We release regular reports to ensure transparency. The frequency can be checked on our website.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як часто публікуються фінансові звіти?',
        desc: 'Ми регулярно публікуємо звіти для забезпечення прозорості. Частоту можна перевірити на нашому сайті.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Is the foundation registered and recognized officially?',
        desc: 'Yes, the foundation is an officially registered entity and collaborates with various organizations and government bodies.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи зареєстрований і визнаний фонд офіційно? ',
        desc: "Так, фонд є офіційно зареєстрованим суб'єктом і співпрацює з різними організаціями та державними органами.",
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Who started the foundation?',
        desc: 'The foundation was started by a group of dedicated individuals concerned about the welfare of Ukrainians affected by the war.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Хто заснував фонд?',
        desc: 'Фонд був заснований групою небайдужих людей, які переймаються добробутом українців, що постраждали від війни.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How can I get involved?',
        desc: 'There are multiple ways - from donating, volunteering, partnering, or simply spreading the word.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як я можу долучитися? ',
        desc: 'Є кілька способів - пожертвувати, стати волонтером, партнером або просто поширювати інформацію.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Are there any physical offices I can visit?',
        desc: 'Yes, office locations and operating hours are listed on our website.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи є фізичні офіси, які я можу відвідати? ',
        desc: 'Так, адреси та години роботи офісів вказані на нашому сайті.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How can I get psychological support for a friend affected by the war?',
        desc: "Reach out to our support services via our website or helpline, and we'll guide you through the process.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як я можу отримати психологічну підтримку для друга, який постраждав від війни? ',
        desc: 'Зверніться до наших служб підтримки через наш веб-сайт або на гарячу лінію, і ми допоможемо вам у цьому процесі.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Do you have resources for children specifically?',
        desc: 'Yes, we offer specialized support services and resources for children, recognizing their unique needs.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи є у вас ресурси спеціально для дітей? ',
        desc: 'Так, ми пропонуємо спеціалізовані служби підтримки та ресурси для дітей, враховуючи їхні унікальні потреби.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How does the foundation ensure the quality of its support services?',
        desc: 'We collaborate with professionals in various fields and continuously review and improve our programs based on feedback and outcomes.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як фонд забезпечує якість своїх послуг підтримки?',
        desc: "Ми співпрацюємо з професіоналами в різних галузях і постійно переглядаємо та вдосконалюємо наші програми на основі зворотного зв'язку та результатів.",
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Are there any success stories I can read about?',
        desc: "Certainly! We regularly feature stories of those we've helped on our website and in our newsletters.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи є історії успіху, про які я можу прочитати? ',
        desc: 'Звісно! Ми регулярно публікуємо історії тих, кому ми допомогли, на нашому веб-сайті та в наших інформаційних бюлетенях.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Are donations tax-deductible?',
        desc: 'Please check with local tax laws, but in many regions, donations to recognized charitable organizations are tax-deductible.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи пожертвування підлягають оподаткуванню?',
        desc: 'Будь ласка, перевірте місцеве податкове законодавство, але в багатьох регіонах пожертви на користь визнаних благодійних організацій не підлягають оподаткуванню.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How does the foundation engage with local communities?',
        desc: 'Through community-building activities, events, educational courses, and direct engagement with local leaders and organizations.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як фонд взаємодіє з місцевими громадами?',
        desc: 'Через діяльність з розбудови громад, заходи, освітні курси та пряму взаємодію з місцевими лідерами та організаціями.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I suggest a project or initiative for the foundation?',
        desc: 'We always welcome suggestions! Please contact our team with your ideas.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я запропонувати проект або ініціативу для фонду?',
        desc: "Ми завжди раді пропозиціям! Будь ласка, зв'яжіться з нашою командою та продемонструйте ваші ідеями.",
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Are there any upcoming events?',
        desc: "Our website's event calendar features all upcoming activities, workshops, and community engagements.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи є події у найближчому майбутньому',
        desc: 'У календарі подій на нашому сайті ви знайдете всі майбутні заходи, воркшопи та громадські акції.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How does the foundation manage its volunteers?',
        desc: 'We have a dedicated program for recruiting, training, deploying, and supporting our volunteers.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як фонд керує волонтерами?',
        desc: 'У нас є спеціальна програма для набору, навчання та підтримки наших волонтерів.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: "What's the foundation's stance on political involvement?",
        desc: 'Our primary focus is humanitarian. We steer clear of political affiliations and work towards the well-being of Ukrainians affected by the war.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Яка позиція фонду щодо участі в політиці?',
        desc: 'Наш основний фокус - гуманітарна допомога. Ми стоїмо осторонь політичної приналежності і працюємо заради добробуту українців, які постраждали від війни.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How can businesses partner with the foundation?',
        desc: 'Businesses can reach out to our partnership development team to explore collaboration opportunities.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як бізнес може співпрацювати з фондом?',
        desc: 'Компанії можуть звернутися до нашої команди з розвитку партнерства, щоб вивчити можливості співпраці.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Are there specific regions the foundation operates in?',
        desc: 'While our mission is global, specific operations might be concentrated in areas with a high concentration of Ukrainians needing assistance.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи є конкретні регіони, в яких працює фонд?',
        desc: 'Хоча наша місія є глобальною, окремі операції можуть бути сконцентровані в регіонах, де зібрана велика кількість українців, які потребують допомоги.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How can I get regular updates from the foundation?',
        desc: 'Subscribe to our newsletter or follow us on our social media channels.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як я можу отримувати регулярні новини від фонду?',
        desc: 'Підпишіться на нашу розсилку або слідкуйте за нами в соціальних мережах.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'Can I choose a specific program to donate to?',
        desc: 'Yes, donors can specify which initiative or program they wish to support.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Чи можу я обрати конкретну програму для пожертви?',
        desc: 'Так, донори можуть вказати, яку ініціативу або програму вони хочуть підтримати.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'How does the foundation handle data privacy?',
        desc: "We adhere to strict data privacy policies, ensuring the safety and confidentiality of all our stakeholders' information.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як фонд забезпечує конфіденційність даних?',
        desc: 'Ми дотримуємося суворої політики конфіденційності даних, гарантуючи безпеку та конфіденційність інформації всіх наших стейкхолдерів.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: 'What challenges does the foundation currently face?',
        desc: "The ever-evolving nature of the war's aftermath means challenges vary. Current challenges are listed in our annual report and regular updates.",
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'З якими викликами наразі стикається фонд?',
        desc: 'Наслідки війни постійно змінюються, а це означає, що виклики теж змінюються. Поточні виклики перераховані в нашому щорічному звіті та регулярних оновленнях.',
      },
    ],
    _id: uuidv4(),
  },
  {
    translations: [
      {
        _id: uuidv4(),
        language: 'en',
        tag: "How can I offer feedback or concerns about the foundation's operations?",
        desc: 'We welcome feedback. Please contact our support team or use the feedback form on our website.',
      },
      {
        _id: uuidv4(),
        language: 'ua',
        tag: 'Як я можу залишити відгук або висловити занепокоєння щодо діяльності фонду?',
        desc: "Ми вітаємо зворотній зв'язок. Будь ласка, зв'яжіться з нашою командою підтримки або скористайтеся формою зворотного зв'язку на нашому сайті.",
      },
    ],
    _id: uuidv4(),
  },
];
