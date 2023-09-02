export interface ITranslation {
  language: 'en' | 'ua';
  name: string;
  job: string;
  title: string;
  body: string;
}

export interface IPersonReviewData {
  translations: ITranslation[];
  photo: string;
}

const personReviewsData: IPersonReviewData[] = [
  {
    translations: [
      {
        language: 'en',
        name: 'Anna Shevchenko',
        job: 'Volunteer',
        title: 'Together, Building a Brighter Future',
        body: 'At HealingHaven Ukraine, our mission is driven by the belief that every individual deserves compassion, support, and a chance to thrive. With unwavering dedication, we stand handin hand with the Ukrainian diaspora, igniting hope and empowering lives. Join us on this journey of healing, as we forge a brighter future for those affected by the ravages of war.',
      },
      {
        language: 'ua',
        name: 'Ганна Шевченко',
        job: 'Волонтер',
        title: 'Разом будуємо світле майбутнє',
        body: 'Наша місія в HealingHaven Ukraine ґрунтується на вірі в те, що кожна людина заслуговує на співчуття, підтримку та шанс на процвітання. З непохитною відданістю ми стоїмо пліч-о-пліч з українською діаспорою, запалюючи надію та надаючи можливість жити. Приєднуйтесь до нас на цьому шляху зцілення, коли ми будуємо світле майбутнє для тих, хто постраждав від руйнівної війни.',
      },
    ],
    photo: '/static/images/reviews/review-1.png',
  },
  {
    translations: [
      {
        language: 'en',
        name: 'Yulia Tkachenko',
        job: 'Volunteer',
        title: 'Together, Building a Brighter Future',
        body: 'As we look ahead, our commitment remains steadfast—to be a beacon of hope for those who seek solace, an advocate for those who yearn to grow, and a guiding light for those who dream of a world beyond conflict.',
      },
      {
        language: 'ua',
        name: 'Юлія Ткаченко',
        job: 'Волонтер',
        title: 'Разом будуємо світле майбутнє',
        body: 'Дивлячись у майбутнє, ми залишаємося непохитними у своєму прагненні бути маяком надії для тих, хто шукає розради, захисником для тих, хто прагне зростання, і дороговказом для тих, хто мріє про світ без конфліктів.',
      },
    ],
    photo: '/static/images/reviews/review-2.png',
  },
  {
    translations: [
      {
        language: 'en',
        name: 'Olena Ivanenko',
        job: 'Volunteer',
        title: 'Together, Building a Brighter Future',
        body: 'Join us in weaving a future of possibility, where every life is cherished, and every dream is nurtured. Together, we can change the trajectory of countless lives, one act of kindness at a time.',
      },
      {
        language: 'ua',
        name: 'Олена Іваненко',
        job: 'Волонтер',
        title: 'Разом будуємо світле майбутнє',
        body: 'Приєднуйтесь до нас, щоб творити майбутнє можливостей, де цінується кожне життя і плекається кожна мрія. Разом ми можемо змінити траєкторію незліченних життів, роблячи один добрий вчинок за раз.',
      },
    ],
    photo: '/static/images/reviews/review-3.png',
  },
  {
    translations: [
      {
        language: 'en',
        name: 'Maria Dmytruk',
        job: 'Volunteer',
        title: 'Together, Building a Brighter Future',
        body: 'Join us in weaving a future of possibility, where every life is cherished, and every dream is nurtured. Together, we can change the trajectory of countless lives, one act of kindness at a time.',
      },
      {
        language: 'ua',
        name: 'Марія Дмитрук',
        job: 'Волонтер',
        title: 'Разом будуємо світле майбутнє',
        body: 'Приєднуйтесь до нас, щоб творити майбутнє можливостей, де цінується кожне життя і плекається кожна мрія. Разом ми можемо змінити траєкторію незліченних життів, роблячи один добрий вчинок за раз.',
      },
    ],
    photo: '/static/images/reviews/review-4.png',
  },
];

export default personReviewsData;
