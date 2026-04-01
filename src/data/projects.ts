export type Project = {
  name: string;
  description: string;
  tech: string[];
  live: string;
  github?: string;
  img?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'IntervalFlow',
    description: 'Fullstack HIIT/Tabata training app with an exercise library and configurable interval timer. Custom hooks architecture, REST API with JWT auth, rate limiting, and interactive OpenAPI docs.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Web Audio API'],
    live: 'https://interval-flow.vercel.app',
    github: 'https://github.com/AnnetDev/-IntervalFlow',
    featured: true,
  },
  {
    name: 'DietPet',
    description: 'Mobile-first PWA for tracking pet nutrition, feeding schedules, weight history, and medical records. Installable on mobile, RU/EN with auto-detect, no backend required.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'PWA', 'React Router'],
    live: 'https://annetdev.github.io/DietPet/',
    github: 'https://github.com/AnnetDev/DietPet',
    featured: true,
  },
  {
    name: 'Timeline',
    description: 'Interactive timeline component built as a test task. Smooth GSAP animations, Swiper carousel, fully typed with TypeScript.',
    tech: ['React', 'TypeScript', 'GSAP', 'Swiper', 'Webpack', 'Styled Components'],
    live: 'https://annetdev.github.io/my-timeline-project/',
    github: 'https://github.com/AnnetDev/my-timeline-project',
    img: 'timeline',
  },
  {
    name: 'Internship',
    description: 'Responsive web pages for internship programs with custom sliders, modals, accordions, and validated forms. High accessibility and semantic markup throughout.',
    tech: ['HTML5', 'SCSS', 'JavaScript', 'Vite'],
    live: 'https://annetdev.github.io/Internship/',
    img: 'internship',
  },
  {
    name: 'SuperGym',
    description: 'Fitness centre website with video content, tab navigation, sliders, and accordions. Optimised for mobile with semantic, accessible markup.',
    tech: ['HTML5', 'SCSS', 'JavaScript', 'Vite'],
    live: 'https://annetdev.github.io/SuperGym/',
    img: 'supergym',
  },
  {
    name: 'Farm Food Market',
    description: 'E-commerce landing page with interactive product listings and a responsive layout built with React.',
    tech: ['React', 'CSS'],
    live: 'https://wtqm9n.csb.app/',
    img: 'farmfood',
  },
  {
    name: 'Lifetour',
    description: 'Travel agency website with third-party sliders, form validation, and accessibility optimisations. Improved page load speed to simplify the booking process.',
    tech: ['HTML5', 'SCSS', 'JavaScript'],
    live: 'https://annetdev.github.io/LIFETOUR/',
    img: 'lifetour',
  },
  {
    name: 'Drink2Go',
    description: 'Online store homepage with mobile menu, custom checkboxes, and a price range slider. Full design compliance across all devices.',
    tech: ['HTML5', 'SCSS', 'JavaScript', 'Gulp', 'noUiSlider'],
    live: 'https://annetdev.github.io/Drink2go-grading/',
    img: 'drink2go',
  },
  {
    name: 'Kekstagram',
    description: 'Image-sharing platform with upload, scaling, effects, hashtag validation, and AJAX form submission. Responsive UI with modals and comment pagination.',
    tech: ['HTML5', 'CSS', 'JavaScript', 'AJAX'],
    live: 'https://annetdev.github.io/2448369-kekstagram-32/',
    img: 'kekstagram',
  },
  {
    name: 'Osnova',
    description: 'Live production site for a massage & fitness studio. Semantic markup, complex layouts, interactive Yandex Maps, and adaptive graphics.',
    tech: ['HTML5', 'CSS', 'JavaScript'],
    live: 'https://osnovavrn.ru/',
    img: 'osnova',
  },
  {
    name: 'Cat Energy',
    description: 'Multi-page responsive site following BEM methodology with adaptive graphics and Google Maps integration across mobile, tablet, and desktop.',
    tech: ['HTML5', 'Sass', 'Gulp', 'BEM'],
    live: 'https://annetdev.github.io/2448369-cat-energy-31/',
    img: 'catenergy',
  },
];
