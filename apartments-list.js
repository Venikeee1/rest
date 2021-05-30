const initialState = {
  title: '',
  imgLink: '',
  description: '',
  price: 0,
  originalLink: '',
  parking: false,
  coordinates: '',
  rating: '',
  persons: 5,
  beach: true,
  pool: false,
};

export const apartmentsList = [
  {
    title: 'Apartments Ant',
    imgLink:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/143533656.jpg?k=c7e2034080bc38818b6b540310096282c032f6e85eef59d433073ed0eb88dfb4&o=&hp=1',
    description: `Апартаменты Ant расположены в 700 м от пляжа Дукли. К услугам гостей ресторан, сад и апартаменты с кондиционером, патио и бесплатным WiFi.
    Апартаменты с плиточным полом располагают полностью оборудованной кухней с холодильником, обеденной зоной, телевизором с плоским экраном и собственной ванной комнатой с душем и феном. Во всех апартаментах есть балкон с видом на сад.
    К услугам гостей терраса.
    В апартаментах Ant работает пункт проката автомобилей.
    Аквапарк Будвы находится в 5 км от апартаментов, а курорт Свети-Стефан — в 8 км. Расстояние до аэропорта Тивата составляет 18 км. За дополнительную плату организуется трансфер от/до аэропорта.
    Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 8,9.
    Мы говорим на вашем языке!`,
    price: 4021,
    originalLink:
      'https://www.booking.com/hotel/me/apartments-ant.ru.html?aid=1250365&label=huno.1%3ACjwKCAjwzMeFBhBwEiwAzwS8zGI6eLwih6NBUpWxcwsiC7tmawt74k3xhmy52sbZvDKSaZcibJGk4BoCYCsQAvD_BwE&sid=50f4d142ec4f9c42b59efd9cc8dc1f39&all_sr_blocks=140374606_270915530_5_0_0&checkin=2021-06-16&checkout=2021-06-19&dest_id=900039384&dest_type=city&from_beach_non_key_ufi_sr=1&group_adults=2&group_children=0&hapos=1&highlighted_blocks=140374606_270915530_5_0_0&hpos=1&no_rooms=1&sr_order=popularity&sr_pri_blocks=140374606_270915530_5_0_0__12000&srepoch=1622373441&srpvid=1d2e4f60f71106e4&ucfs=1&sig=v1xOv62gLU&from=searchresults;highlight_room=#hotelTmpl',
    parking: true,
    coordinates: [42.28391231527026, 18.86659519877375],
    rating: 8.6,
    additionalInfo: '2,4 км от центра',
    persons: 5,
  },
  {
    title: 'R club Apartments Old Town',
    imgLink:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/243198931.jpg?k=debf2c9436bc188858296b7354e07a7cc8f04708272e710b50979c8b889668b9&o=&hp=1',
    description: `Апартаменты R club Old Town Budva с видом на море, бесплатным Wi-Fi и бесплатной частной парковкой расположены в Будве, в 1,7 км от пляжа Дукли.
    В числе удобств апартаментов кухня с холодильником и плитой, телевизор с плоским экраном и спутниковыми каналами, гладильные принадлежности, шкаф и гостиный уголок.
    К услугам гостей терраса.
    В апартаментах R club Old Town Budva работает прокат автомобилей.
    В окрестностях находятся такие популярные достопримечательности, как церковь Святой Троицы, торговые центры TQ Plaza и Omnia. Расстояние от апартаментов R club Old Town Budva до ближайшего аэропорта Тиват составляет 17 км. За дополнительную плату организуется трансфер от/до аэропорта.
    Это любимая часть города Будва среди наших гостей согласно независимым отзывам.`,
    price: 7540,
    originalLink:
      'https://www.booking.com/hotel/me/r-club-apartments-old-town-budva.ru.html?aid=1250365&label=huno.1%3ACjwKCAjwzMeFBhBwEiwAzwS8zGI6eLwih6NBUpWxcwsiC7tmawt74k3xhmy52sbZvDKSaZcibJGk4BoCYCsQAvD_BwE&sid=011a22674650041baa370b67d4e5a15b&all_sr_blocks=597812701_242086228_4_0_0&checkin=2021-06-16&checkout=2021-06-19&dest_id=900039384&dest_type=city&dist=0&from_beach_non_key_ufi_sr=1&group_adults=2&group_children=0&hapos=7&highlighted_blocks=597812701_242086228_4_0_0&hpos=7&nflt=hotelfacility%3D2%3Bpopular_activities%3D302%3B&no_rooms=1&room1=A,A&sb_price_type=total&sr_order=upsort_bh&sr_pri_blocks=597812701_242086228_4_0_0__22499&srepoch=1622356877&srpvid=ad5a2f06a1f00128&type=total&ucfs=1&sig=v1WX_DPxs7&activeTab=main',
    parking: true,
    coordinates: [42.278699902598404, 18.83740632575489],
    rating: 9.3,
    persons: 4,
  },
  {
    title: 'Apartment-Hotel Vila',
    imgLink:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/91832570.jpg?k=397d83391709e10f0180b82d8e6c20203ed50a70b087ae5b2400dcf62f09c6b5&o=&hp=1',
    description: `Вилла Petrovic расположена в поселке Бечичи, в 200 м от пляжа Бечичи, в 2,5 км от центра Будвы и в 3 км от пляжа Могрен. До курорта Свети-Стефан — 3,6 км. По запросу предоставляется частная парковка.
    Во всех апартаментах обустроена гостиная и обеденная зона. В некоторых апартаментах есть терраса и/или патио с видом на море. Кухня оснащена духовкой, микроволновой печью и холодильником. В числе удобств плита и чайник. Гостям предоставляется постельное белье.
    Для гостей организован прокат автомобилей. В окрестностях популярен сноркелинг. В окрестностях можно заняться различными видами активного отдыха, включая катание на водных лыжах и парапланеризм.
    Пляж Яз находится в 5 км от комплекса Vila Petrovic. Расстояние до аэропорта Тиват составляет 18 км, а до аэропорта Подгорицы — 65 км. За дополнительную плату предоставляется трансфер от/до аэропорта Подгорица.`,
    price: 7260,
    originalLink:
      'https://www.booking.com/hotel/me/vila-petrovic-budva.ru.html?aid=1250365&label=huno.1%3ACjwKCAjwzMeFBhBwEiwAzwS8zGI6eLwih6NBUpWxcwsiC7tmawt74k3xhmy52sbZvDKSaZcibJGk4BoCYCsQAvD_BwE&sid=011a22674650041baa370b67d4e5a15b&all_sr_blocks=209031705_95724233_0_0_0&checkin=2021-06-16&checkout=2021-06-19&dest_id=900039384&dest_type=city&dist=0&from_beach_non_key_ufi_sr=1&group_adults=2&group_children=0&hapos=8&highlighted_blocks=209031705_95724233_0_0_0&hpos=8&nflt=hotelfacility%3D2%3Bpopular_activities%3D302%3B&no_rooms=1&room1=A%2CA&sb_price_type=total&sr_order=upsort_bh&sr_pri_blocks=209031705_95724233_0_0_0__19497&srepoch=1622356877&srpvid=ad5a2f06a1f00128&type=total&ucfs=1&sig=v1nBc2sfDl&activeTab=main',
    parking: true,
    coordinates: [42.28352282853047, 18.868345512264337],
    rating: 8.9,
    persons: 5,
  },
  {
    title: 'Lux Apartments Kristina',
    imgLink:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/111439950.jpg?k=84dc861b4dfb2d213ee0cecee2d7604e3ad4d0fb14d8386b1bcb15d44cc722d5&o=&hp=1',
    description: `Апартаменты Lux Kristina с видом на море и бесплатным Wi-Fi расположены в Будве, в 150 метрах от пляжа Словенска, аквапарка «Будва» и торгового центра TQ Plaza. К услугам гостей кондиционер.
    Во всех апартаментах есть балкон, телевизор с плоским экраном и кабельными каналами, а также хорошо оборудованная кухня с посудомоечной машиной, духовкой и микроволновой печью. В собственной ванной комнате установлен душ и предоставляются бесплатные туалетно-косметические принадлежности.
    До пляжа Яз — 3,1 км. Расстояние от апартаментов Lux Kristina до аэропорта Тиват составляет 16 км.
    Это любимая часть города Будва среди наших гостей согласно независимым отзывам.
    Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 8,8.`,
    price: 8545,
    originalLink:
      'https://www.booking.com/hotel/me/lux-apartments-budva-budva.ru.html?aid=1250365&label=huno.1%3ACjwKCAjwzMeFBhBwEiwAzwS8zGI6eLwih6NBUpWxcwsiC7tmawt74k3xhmy52sbZvDKSaZcibJGk4BoCYCsQAvD_BwE&sid=011a22674650041baa370b67d4e5a15b&all_sr_blocks=233183202_285630513_0_0_0&checkin=2021-06-16&checkout=2021-06-19&dest_id=900039384&dest_type=city&dist=0&from_beach_non_key_ufi_sr=1&group_adults=2&group_children=0&hapos=51&highlighted_blocks=233183202_285630513_0_0_0&hpos=1&nflt=hotelfacility%3D2%3Bpopular_activities%3D302%3B&no_rooms=1&room1=A%2CA&sb_price_type=total&sr_order=upsort_bh&sr_pri_blocks=233183202_285630513_0_0_0__25499&srepoch=1622357416&srpvid=e9e03013bd0700f0&type=total&ucfs=1&sig=v1uxTrnz3N&activeTab=main',
    parking: true,
    coordinates: [42.284960254979886, 18.842258537180125],
    rating: 9.4,
    persons: 5,
  },
  {
    title: 'Family Apartment',
    imgLink:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/145450780.jpg?k=3796ab70a05d15f0afc94ffd648c5397f7ed3514433b7f11624350c42c885691&o=&hp=1',
    description: `Семейные апартаменты с кухней расположены в Будве, в 1,4 км от пляжа Могрен, в 1,8 км от аквапарка Будвы и в 3,2 км от пляжа Яз.
    В апартаментах есть телевизор с плоским экраном и кабельными каналами, а также гостиная.
    Курорт Свети-Стефан находится в 5 км от апартаментов, а торговый центр TQ Plaza — в 500 м. Расстояние до аэропорта Тивата составляет 16 км.
    Это любимая часть города Будва среди наших гостей согласно независимым отзывам.
    Мы говорим на вашем языке!`,
    price: 7721,
    originalLink:
      'https://www.booking.com/hotel/me/family-a.ru.html?aid=1250365&label=huno.1%3ACjwKCAjwzMeFBhBwEiwAzwS8zGI6eLwih6NBUpWxcwsiC7tmawt74k3xhmy52sbZvDKSaZcibJGk4BoCYCsQAvD_BwE&sid=011a22674650041baa370b67d4e5a15b&all_sr_blocks=344357701_295779707_5_0_0&checkin=2021-06-16&checkout=2021-06-19&dest_id=900039384&dest_type=city&dist=0&from_beach_non_key_ufi_sr=1&group_adults=2&group_children=0&hapos=62&highlighted_blocks=344357701_295779707_5_0_0&hpos=12&nflt=hotelfacility%3D2%3Bpopular_activities%3D302%3B&no_rooms=1&room1=A%2CA&sb_price_type=total&sr_order=upsort_bh&sr_pri_blocks=344357701_295779707_5_0_0__20736&srepoch=1622357416&srpvid=e9e03013bd0700f0&type=total&ucfs=1&sig=v1zZ59ygmd&activeTab=main',
    parking: true,
    coordinates: [42.28680601603295, 18.841592467578167],
    rating: 9.3,
    persons: 5,
  },
  {
    title: 'Lighthouse Apartments',
    imgLink:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/22844141.jpg?k=63e6d0d5acc81112e8cbe4895538419272ab9fc7405d2bd9fb9324424b975561&o=&hp=1',
    description: `Апартаменты Lighthouse расположены в 2,5 км от пляжа и в 3,5 км от центра Будвы. К услугам гостей апартаменты с кондиционером и видом на море. К услугам гостей бесплатный Wi-Fi и общий сад с принадлежностями для барбекю.
    Все апартаменты оснащены телевизором. Все апартаменты располагают меблированным балконом, мини-кухней с обеденным столом, гостиной зоной с телевизором и собственной ванной комнатой.
    Ближайший продуктовый магазин находится в 2 км от апартаментов Lighthouse. Остановка местного автобуса находится в 500 м, а автобусный вокзал - в 4 км от апартаментов.
    На территории обустроена бесплатная частная парковка. Во всех апартаментах есть меблированный балкон.
    Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 9,3.`,
    price: 6032,
    originalLink:
      'https://www.booking.com/hotel/me/lighthouse.ru.html?aid=1250365&label=huno.1%3ACjwKCAjwzMeFBhBwEiwAzwS8zGI6eLwih6NBUpWxcwsiC7tmawt74k3xhmy52sbZvDKSaZcibJGk4BoCYCsQAvD_BwE&sid=011a22674650041baa370b67d4e5a15b&all_sr_blocks=77545409_129919787_2_0_0&checkin=2021-06-16&checkout=2021-06-19&dest_id=900039384&dest_type=city&dist=0&from_beach_non_key_ufi_sr=1&group_adults=2&group_children=0&hapos=5&highlighted_blocks=77545409_129919787_2_0_0&hpos=5&no_rooms=1&room1=A,A&sb_price_type=total&sr_order=upsort_bh&sr_pri_blocks=77545409_129919787_2_0_0__7020&srepoch=1622354233&srpvid=8afc29dc96b9002a&type=total&ucfs=1&sig=v1XPQMclNe&activeTab=main#map_closed',
    parking: true,
    coordinates: [42.28708870090016, 18.8119061947921],
    rating: 9.5,
    persons: 4,
    beach: false,
  },
  {
    title: 'Squere 44 Apartment',
    imgLink:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/102125882.jpg?k=e272d467549d4d13c1cdebd263acee7c22cb50382bc7661809017e84f4db1bfd&o=&hp=1',
    description: `Апартаменты Squere 44 расположены в Будве, в 1,7 км от пляжа Дукли и в 3,1 км от аквапарка Будва. К услугам гостей бесплатный Wi-Fi и кондиционер. Апартаменты находятся в 11 км от курорта Свети-Стефан и в 2,4 км от крепости Могрен.
    Апартаменты располагают 2 спальнями, кухней с посудомоечной машиной и микроволновой печью, телевизором с плоским экраном, гостиным уголком и 1 ванной комнатой.
    Поблизости находятся такие популярные достопримечательности, как церковь Святой Троицы, торговые центры TQ Plaza и Omnia. Расстояние от апартаментов Squere 44 до аэропорта Тиват составляет 17 км.
    Это любимая часть города Будва среди наших гостей согласно независимым отзывам.`,
    price: 6836,
    originalLink:
      'https://www.booking.com/hotel/me/squere-44-apartment.ru.html?aid=1250365;label=huno.1%3ACjwKCAjwzMeFBhBwEiwAzwS8zGI6eLwih6NBUpWxcwsiC7tmawt74k3xhmy52sbZvDKSaZcibJGk4BoCYCsQAvD_BwE;sid=011a22674650041baa370b67d4e5a15b;atlas_src=sr_iw_btn;checkin=2021-06-16;checkout=2021-06-19;dest_id=900039384;dest_type=city;dist=0;group_adults=2;group_children=0;highlighted_blocks=245887001_256996411_5_0_0;no_rooms=1;room1=A,A;sb_price_type=total;type=total;ucfs=1;sig=v1NP7K9fvf',
    parking: false,
    coordinates: [42.2780221805602, 18.838482941100796],
    rating: 9.8,
    persons: 5,
    beach: false,
  },
  {
    title: 'Apartmani Katarina',
    imgLink:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/142897639.jpg?k=31904832e7119f66a0e8cd643d358a785af9b11e7aed7c96f308a03c5063d9e4&o=&hp=1',
    description: `Апартаменты Katarina с видом на город расположены в Будве, всего в 400 м от Старого города и пляжа Ричардс-Хед. К услугам гостей бесплатный Wi-Fi и бесплатная частная парковка. В 3 км находится аквапарк Будвы.
    Апартаменты располагают 1 спальней, 1 ванной комнатой, телевизором с плоским экраном и кабельными каналами, обеденной зоной, полностью оборудованной кухней и балконом с видом на море. За дополнительную плату предоставляются полотенца и постельное белье.
    К услугам гостей терраса. В апартаментах Katarina можно взять напрокат автомобиль.
    Неподалеку находятся форт Могрен, торговые центры TQ Plaza и Omnia. Расстояние от апартаментов Katarina до аэропорта Тивата составляет 23 км. За дополнительную плату организуется трансфер от/до аэропорта.
    Это любимая часть города Будва среди наших гостей согласно независимым отзывам.
    Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 8,8.`,
    price: 6535,
    originalLink:
      'https://www.booking.com/hotel/me/apartmani-katarina-budva1.ru.html?aid=1250365&label=huno.1%3ACjwKCAjwzMeFBhBwEiwAzwS8zGI6eLwih6NBUpWxcwsiC7tmawt74k3xhmy52sbZvDKSaZcibJGk4BoCYCsQAvD_BwE&sid=011a22674650041baa370b67d4e5a15b&all_sr_blocks=346790101_135800538_2_0_0&checkin=2021-06-16&checkout=2021-06-19&dest_id=900039384&dest_type=city&dist=0&from_beach_non_key_ufi_sr=1&group_adults=2&group_children=0&hapos=4&highlighted_blocks=346790101_135800538_2_0_0&hpos=4&no_rooms=1&room1=A,A&sb_price_type=total&sr_order=upsort_bh&sr_pri_blocks=346790101_135800538_2_0_0__15000&srepoch=1622354111&srpvid=af48299fd6bc0080&type=total&ucfs=1&sig=v1ouYqj0o0&activeTab=main',
    parking: true,
    coordinates: [42.274167288054166, 18.89123055285778],
    rating: null,
    persons: 4,
    beach: false,
  },
  {
    title: 'Chill and Go Aparthotel',
    imgLink:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/102924670.jpg?k=4180dea71b68d01e2742691b4d9c11d4c4520e9e6bac4e8f6f148a9493167e49&o=&hp=1',
    description: `Апарт-отель Chill and Go расположен в городе Будва, примерно в 1,2 км от Словенского пляжа и в 4 км от пляжа Яз. К услугам гостей сезонный открытый бассейн, бесплатный Wi-Fi и бесплатная собственная парковка на территории.
    Современные меблированные апартаменты и люксы оснащены кондиционером, в них обустроена гостиная зона и балкон. В апартаментах имеется полностью оборудованная кухня, а в люксах установлена плита. В распоряжении гостей собственная ванная комната.
    В 200 метрах работает ресторан и бар. Старый город Будвы находится в 2,5 км от апарт-отеля Chill and Go, а курорт Свети-Стефан — в 9 км.
    Расстояние до аэропорта Тиват составляет 19 км.
    Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 8,3.`,
    price: 11109,
    originalLink:
      'https://www.booking.com/hotel/me/chill-and-go.ru.html?aid=1250365&label=huno.1%3ACjwKCAjwzMeFBhBwEiwAzwS8zGI6eLwih6NBUpWxcwsiC7tmawt74k3xhmy52sbZvDKSaZcibJGk4BoCYCsQAvD_BwE&sid=011a22674650041baa370b67d4e5a15b&all_sr_blocks=240948603_271766273_2_0_0&checkin=2021-06-16&checkout=2021-06-19&dest_id=900039384&dest_type=city&dist=0&from_beach_non_key_ufi_sr=1&group_adults=2&group_children=0&hapos=12&highlighted_blocks=240948603_271766273_2_0_0&hpos=12&no_rooms=1&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=240948603_271766273_2_0_0__15319&srepoch=1622353079&srpvid=622f279b51e10185&type=total&ucfs=1&sig=v1BzLplniT&activeTab=main',
    parking: true,
    coordinates: [42.29549319740411, 18.845251342707975],
    rating: 9.2,
    persons: 4,
    beach: false,
    pool: true,
  },
];
