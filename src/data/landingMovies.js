import spiderMan from '../assets/images/slider/spiderman.jpg';
import batman from '../assets/images/slider/batman.jpg';
import topGun from '../assets/images/slider/top_gun_maverick.jpg';
import betterCallSaul from '../assets/images/slider/better_call_saul.jpg';
import breakingBad from '../assets/images/slider/breaking_bad.jpg';

export const landingMovies = [
  {
    id: 1,
    src: spiderMan,
    name: 'Spider Man',
    title: 'Spider Man مرد عنکبوتی',
    summary:
      'لورم ایپسوم متن ساختگی با ت با هدف بهبود ابزارهای کاربردی می باشد.',
    imdbPoint: { point: 7.3, averagePeople: 133466 },
    genres: [
      {
        title: 'کمدی',
        url: '/genre/comedy/',
      },
      {
        title: 'درام',
        url: '/genre/drama/',
      },
      {
        title: 'اکشن',
        url: '/genre/action/',
      },
    ],
    languages: [{ title: 'انگلیسی', url: '/language/english/' }],
    release: 2022,
    countries: [
      { title: 'آلمان', url: '/country/germany/' },
      { title: 'انگلیس', url: '/country/england/' },
      { title: 'فرانسه', url: '/country/france/' },
    ],
    time: 112,
    group: 'Movies',
  },
  {
    id: 2,
    src: batman,
    name: 'Batman',
    title: 'Batman بتمن',
    release: 2022,
    summary:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با\
    استفاده از طراحانی متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    genres: [
      {
        title: 'کمدی',
        url: '/genre/comedy/',
      },
    ],
    languages: [{ title: 'انگلیسی', url: '/language/english/' }],
    countries: [
      { title: 'آلمان', url: '/country/germany/' },
      { title: 'انگلیس', url: '/country/england/' },
    ],
    imdbPoint: { point: 7.3, averagePeople: 1123124 },
    time: 112,
    group: 'Movies',
  },
  {
    id: 3,
    src: topGun,
    name: 'Top Gun Maverick',
    release: 2022,
    time: 112,
    summary:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامگرها و متون بلکه روزنامه و مجله\
    در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد\
    نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    genres: [
      {
        title: 'کمدی',
        url: '/genre/comedy/',
      },
    ],
    languages: [{ title: 'انگلیسی', url: '/language/english/' }],
    countries: [{ title: 'انگلیس', url: '/country/england/' }],
    title: 'Top Gun Maverick تاپ گان ماوریک',
    imdbPoint: { point: 7.3, averagePeople: 1123124 },
    group: 'Movies',
  },
  {
    id: 4,
    src: betterCallSaul,
    name: 'Better Call Saul',
    title: 'Better Call Saul بهتره با ساول تماس بگیرید',
    release: 2022,
    summary:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از  ابزارهای کاربردی می باشد.',
    time: 112,
    genres: [
      {
        title: 'کمدی',
        url: '/genre/comedy/',
      },
    ],
    languages: [{ title: 'انگلیسی', url: '/language/english/' }],
    countries: [{ title: 'فرانسه', url: '/country/france/' }],
    imdbPoint: { point: 7.3, averagePeople: 1123124 },
    group: 'Series',
  },
  {
    id: 5,
    src: breakingBad,
    name: 'Breaking Bad',
    title: 'Breaking Bad بریکینگ بد',
    release: 2022,
    summary:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با\
    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله\
    در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد\
    نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    time: 112,
    genres: [
      {
        title: 'کمدی',
        url: '/genre/comedy/',
      },
    ],
    languages: [{ title: 'انگلیسی', url: '/language/english/' }],
    countries: [{ title: 'آلمان', url: '/country/germany/' }],
    imdbPoint: { point: 7.3, averagePeople: 1123124 },
    group: 'Series',
  },
];
