export type Project = {
  name: string;
  description: string;
  tech: string[];
  live: string;
  github?: string;
  img?: string;
  logo?: string;
  logoFont?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Helo Hälsa',
    description: 'Full redesign and rebuild of a corporate wellness company\'s public website during an internship — migrated from Squarespace to a custom React build. Led UX/UI design, an ~80-page SEO-optimised architecture, and the final client handover.',
    tech: ['React', 'Responsive Design', 'SEO', 'Schema.org', 'Open Graph', 'UX/UI Design'],
    live: 'https://helohalsa.com/',
    logoFont: 'var(--font-inconsolata)',
    featured: true,
  },
  {
    name: 'IntervalFlow',
    description: 'Fullstack HIIT/Tabata training app with an exercise library and configurable interval timer. Custom hooks architecture, REST API with JWT auth, rate limiting, and interactive OpenAPI docs.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Web Audio API'],
    live: 'https://interval-flow.vercel.app',
    github: 'https://github.com/AnnetDev/-IntervalFlow',
    logo: '/project-logos/intervalflow.svg',
    logoFont: 'var(--font-inter)',
    featured: true,
  },
  {
    name: 'DietPet',
    description: 'Mobile-first PWA for tracking pet nutrition, feeding schedules, weight history, and medical records. Installable on mobile, RU/EN with auto-detect, no backend required.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'PWA', 'React Router'],
    live: 'https://annetdev.github.io/DietPet/',
    github: 'https://github.com/AnnetDev/DietPet',
    logo: '/project-logos/dietpet.svg',
    logoFont: 'var(--font-nunito)',
    featured: true,
  },
  {
    name: 'Timeline',
    description: 'Interactive timeline component built as a test task. Smooth GSAP animations, Swiper carousel, fully typed with TypeScript.',
    tech: ['React', 'TypeScript', 'GSAP', 'Swiper', 'Webpack', 'styled-components'],
    live: 'https://annetdev.github.io/my-timeline-project/',
    github: 'https://github.com/AnnetDev/my-timeline-project',
    logoFont: 'var(--font-pt-sans)',
  },
  {
    name: 'CatCafé',
    description: 'Landing page for a cat café in Saint Petersburg. Photo gallery with Swiper slider, ticket configurator with live price calculation, and a fully responsive layout.',
    tech: ['React', 'React Router', 'styled-components', 'Swiper', 'Sass'],
    live: 'https://cat-cafe-zeta.vercel.app/',
    logo: '/project-logos/catcafe.svg',
    logoFont: 'var(--font-inter)',
    github: 'https://github.com/AnnetDev/Cat-Cafe',
  },
  {
    name: 'Farm Food Market',
    description: 'E-commerce landing page with interactive product listings and a responsive layout built with React.',
    tech: ['React', 'React Router', 'styled-components', 'Swiper', 'Sass', 'Vite'],
    live: 'https://farm-food-market.vercel.app/',
    github: 'https://github.com/AnnetDev/FarmFoodMarket',
    logo: '/project-logos/farmfood.svg',
  },
  {
    name: 'Internship',
    description: 'Responsive web pages for internship programs with custom sliders, modals, accordions, and validated forms. High accessibility and semantic markup throughout.',
    tech: ['HTML5', 'SCSS', 'JavaScript', 'Vite', 'Swiper', 'BEM', 'PostCSS'],
    live: 'https://annetdev.github.io/Internship/',
    github: 'https://github.com/AnnetDev/Internship',
    logo: '/project-logos/internship.svg',
    logoFont: 'var(--font-manrope)',
  },
  {
    name: 'SuperGym',
    description: 'Fitness centre website with video content, tab navigation, sliders, and accordions. Optimised for mobile with semantic, accessible markup.',
    tech: ['HTML5', 'SCSS', 'JavaScript', 'Vite', 'Swiper', 'BEM', 'PostCSS'],
    live: 'https://annetdev.github.io/SuperGym/',
    github: 'https://github.com/AnnetDev/SuperGym',
    logo: '/project-logos/supergym.svg',
    logoFont: 'var(--font-alumni-sans)',
  },
  {
    name: 'Lifetour',
    description: 'Travel agency website with third-party sliders, form validation, and accessibility optimisations. Improved page load speed to simplify the booking process.',
    tech: ['HTML5', 'SCSS', 'JavaScript', 'Vite', 'Swiper', 'BEM', 'PostCSS'],
    live: 'https://annetdev.github.io/LIFETOUR/',
    github: 'https://github.com/AnnetDev/LIFETOUR',
    logo: '/project-logos/lifetour.svg',
    logoFont: 'var(--font-montserrat)',
  },
  {
    name: 'Drink2Go',
    description: 'Online store homepage with mobile menu, custom checkboxes, and a price range slider. Full design compliance across all devices.',
    tech: ['HTML5', 'SCSS', 'JavaScript', 'Gulp', 'noUiSlider'],
    live: 'https://annetdev.github.io/Drink2go-grading/',
    github: 'https://github.com/AnnetDev/Drink2go-grading',
    logo: '/project-logos/drink2go.svg',
    logoFont: 'var(--font-montserrat)',
  },
  {
    name: 'Kekstagram',
    description: 'Image-sharing platform with upload, scaling, effects, hashtag validation, and AJAX form submission. Responsive UI with modals and comment pagination.',
    tech: ['HTML5', 'CSS', 'JavaScript', 'Vite', 'noUiSlider', 'Pristine.js'],
    live: 'https://annetdev.github.io/2448369-kekstagram-32/',
    github: 'https://github.com/AnnetDev/2448369-kekstagram-32',
    logo: '/project-logos/kekstagram.svg',
    logoFont: 'var(--font-open-sans)',
  },
  {
    name: 'Osnova',
    description: 'Live production site for a massage & fitness studio. Semantic markup, complex layouts, interactive Yandex Maps, and adaptive graphics.',
    tech: ['HTML5', 'CSS', 'JavaScript'],
    live: 'https://osnovavrn.ru/',
    // logoFont: 'var(--font-montserrat)',
  },
  {
    name: 'Cat Energy',
    description: 'Multi-page responsive site following BEM methodology with adaptive graphics and Google Maps integration across mobile, tablet, and desktop.',
    tech: ['HTML5', 'SCSS', 'Gulp', 'BEM', 'PostCSS', 'LightningCSS'],
    live: 'https://annetdev.github.io/2448369-cat-energy-31/',
    github: 'https://github.com/AnnetDev/2448369-cat-energy-31',
    logo: '/project-logos/catenergy.svg',
    logoFont: 'var(--font-oswald)',
  },
];
