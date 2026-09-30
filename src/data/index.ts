import type { CarouselData, CarouselBlock } from '../types';

const itemsPerPage = {
  mobile: 1,
  tablet: 3,
  desktop: 5,
};

export const carouselItems: CarouselBlock[] = [
  {
    badges: ['July 16, 2015', 'Peyton Reed', '1h 57m'],
    title: 'Ant-Man',
    description:
      'Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements.',
    desktopImg: {
      src: '/hero/ant-man.webp',
      alt: 'Ant-Man',
    },
    mobileImg: {
      src: '/hero/ant-man.webp',
      alt: 'Ant-Man',
    },
    carouselLink: {
      type: 'whole-carousel-item',
      cta: {
        text: 'Watch now',
        variant: 'primary',
        link: {
          type: 'internal',
          url: '/movies/ant-man',
        },
      },
    },
  },
  {
    title: 'Avengers: Endgame',
    description:
      'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.',
    desktopImg: {
      src: '/hero/avengers_endgame.webp',
      alt: 'Avengers: Endgame',
    },
    mobileImg: {
      src: '/hero/avengers_endgame.webp',
      alt: 'Avengers: Endgame',
    },
    carouselLink: {
      type: 'whole-carousel-item',
      destination: {
        type: 'internal',
        url: '/movies/avengers-endgame',
      },
    },
  },

  {
    title: 'Avengers',
    description:
      'S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.',
    desktopImg: {
      src: '/hero/avengers.webp',
      alt: 'Avengers',
    },
    mobileImg: {
      src: '/hero/avengers.webp',
      alt: 'Avengers',
    },
    carouselLink: {
      type: 'cta',
      cta: {
        text: 'Explore movie',
        variant: 'secondary',
        link: {
          type: 'internal',
          url: '/movies/avengers',
        },
      },
    },
  },

  {
    title: 'Black Panther',
    description:
      "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.",
    desktopImg: {
      src: '/hero/black_panther.webp',
      alt: 'Black Panther',
    },
    mobileImg: {
      src: '/hero/black_panther.webp',
      alt: 'Black Panther',
    },
    carouselLink: {
      type: 'whole-carousel-item',
      destination: {
        type: 'internal',
        url: '/movies/black-panther',
      },
    },
  },

  {
    title: 'Black Widow',
    description:
      'Natasha Romanoff, a member of the Avengers and a former KGB spy, is forced to confront her dark past when a conspiracy involving her old handler arises.',
    desktopImg: {
      src: '/hero/black_widow.webp',
      alt: 'Black Widow',
    },
    mobileImg: {
      src: '/hero/black_widow.webp',
      alt: 'Black Widow',
    },
    carouselLink: {
      type: 'cta',
      cta: {
        text: 'View details',
        variant: 'outlined',
        link: {
          type: 'internal',
          url: '/movies/black-widow',
        },
      },
    },
  },

  {
    title: 'Captain America: Civil War',
    description:
      'When the collective governments decide to ratify the Sokovia Accords, a legal document that regulates superhuman activity, it leads to a discordance between Captain America and Iron Man.',
    desktopImg: {
      src: '/hero/captain_america_civil_war.webp',
      alt: 'Captain America: Civil War',
    },
    mobileImg: {
      src: '/hero/captain_america_civil_war.webp',
      alt: 'Captain America: Civil War',
    },
    carouselLink: {
      type: 'whole-carousel-item',
      destination: {
        type: 'internal',
        url: '/movies/captain-america-civil-war',
      },
    },
  },

  {
    title: 'Captain Marvel',
    description:
      'Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent.',
    desktopImg: {
      src: '/hero/captain_marvel.webp',
      alt: 'Captain Marvel',
    },
    mobileImg: {
      src: '/hero/captain_marvel.webp',
      alt: 'Captain Marvel',
    },
    carouselLink: {
      type: 'cta',
      cta: {
        text: 'Watch trailer',
        variant: 'primary',
        link: {
          type: 'external',
          url: 'https://www.youtube.com/watch?v=Z1BCujX3pw8',
          target: '_blank',
        },
      },
    },
  },

  {
    title: 'Iron Man',
    description:
      'When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.',
    desktopImg: {
      src: '/hero/ironman.webp',
      alt: 'Iron Man',
    },
    mobileImg: {
      src: '/hero/ironman.webp',
      alt: 'Iron Man',
    },
    carouselLink: {
      type: 'whole-carousel-item',
      destination: {
        type: 'external',
        url: 'https://www.marvel.com/movies/iron-man',
        target: '_blank',
      },
    },
  },

  {
    title: 'Ms. Marvel',
    description:
      "Kamala is a superhero fan with an imagination, particularly when it comes to Captain Marvel; Kamala feels like she doesn't fit in at school and sometimes even at home, that is until she gets superpowers like the heroes she's looked up to.",
    desktopImg: {
      src: '/hero/ms_marvel.webp',
      alt: 'Ms. Marvel',
    },
    mobileImg: {
      src: '/hero/ms_marvel.webp',
      alt: 'Ms. Marvel',
    },
    carouselLink: {
      type: 'cta',
      cta: {
        text: 'Discover Ms. Marvel',
        variant: 'secondary',
        link: {
          type: 'internal',
          url: '/movies/ms-marvel',
        },
      },
    },
  },

  {
    title: 'Thor',
    description:
      'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
    desktopImg: {
      src: '/hero/thor.webp',
      alt: 'Thor',
    },
    mobileImg: {
      src: '/hero/thor.webp',
      alt: 'Thor',
    },
    carouselLink: {
      type: 'whole-carousel-item',
      destination: {
        type: 'internal',
        url: '/movies/thor',
      },
    },
  },
];

export const carouselData = {
  title: 'Top Rated Movies',
  items: carouselItems,
  itemsPerPage,
  variant: 'hero',
  loop: false,
  autoAdvance: false,
  advanceInterval: 5000,
  pauseOnHover: true,
} satisfies CarouselData;