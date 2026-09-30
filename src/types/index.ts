export type Variant = 'hero' | 'standard';

export type ItemsPerPage = {
  mobile: number;
  tablet: number;
  desktop: number;
};

type LinkTarget = '_blank' | '_self';

type InternalLink = {
  type: 'internal';
  url: string;
  target?: LinkTarget;
};

type ExternalLink = {
  type: 'external';
  url: string;
  target?: LinkTarget;
};

type Link = InternalLink | ExternalLink;

type Cta = {
  text: string;
  link: Link;
  variant?: 'primary' | 'secondary' | 'outlined' | 'danger';
};

type CarouselLink =
  | {
      type: 'whole-carousel-item';
      destination?: Link;
      cta?: Cta;
    }
  | {
      type: 'cta';
      cta: Cta;
    };

export type CarouselBlock = {
  title?: string;
  description?: string;

  desktopImg?: {
    src?: string;
    alt?: string;
  };

  mobileImg?: {
    src?: string;
    alt?: string;
  };

  videoUrl?: string;

  badges?: string[];

  carouselLink?: CarouselLink;
};

export type CarouselData = {
  title?: string;
  items?: CarouselBlock[];
  itemsPerPage?: ItemsPerPage;
  variant?: Variant;
  loop?: boolean;
  autoAdvance?: boolean;
  advanceInterval?: number;
  pauseOnHover?: boolean;
  priority?: boolean;
};