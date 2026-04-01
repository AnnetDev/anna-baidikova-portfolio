import type { ComponentType, SVGProps } from 'react';
import { Mail } from 'lucide-react';
import GitHubIcon from '@/icons/github.svg';
import LinkedInIcon from '@/icons/linkedin.svg';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export type ContactLink = {
  label: string;
  href: string;
  itemClass: string;
  linkClass: string;
  target?: '_blank';
  Icon: ComponentType<IconProps>;
};

export const contactLinks: ContactLink[] = [
  {
    label: 'Send an e-mail',
    href: 'mailto:annabaidikova92@gmail.com',
    itemClass: 'contacts__list-email',
    linkClass: 'contacts__list-email-link',
    Icon: Mail,
  },
  {
    label: 'My GitHub',
    href: 'https://github.com/AnnetDev/',
    itemClass: 'contacts__list-github',
    linkClass: 'contacts__list-github-link',
    target: '_blank',
    Icon: GitHubIcon,
  },
  {
    label: 'My LinkedIn',
    href: 'https://www.linkedin.com/in/anna-baidikova/',
    itemClass: 'contacts__list-linkedin',
    linkClass: 'contacts__list-linkedin-link',
    target: '_blank',
    Icon: LinkedInIcon,
  },
];

export const hobbies = [
  { icon: '🦸🏼‍♀️', text: 'Balancing family time with cleaning marathons' },
  { icon: '🏃🏼‍♀️', text: 'Active at the gym or sometimes jogging, sometimes just chasing after my kid' },
  { icon: '🏁', text: 'Watching Formula 1 races' },
  { icon: '🤓', text: 'Exploring new technologies, and occasionally browsing online catalogs' },
  { icon: '🎸', text: 'Listening to rock music' },
];
