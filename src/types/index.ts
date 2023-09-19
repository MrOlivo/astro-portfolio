export interface MetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface HeroProps {
  name: string;
  about: string;
}

export interface NavItemProps {
  text: string;
  link: string;
}

export interface Experience {
  name: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}
export interface Experiences {
  title: string;
  details: Experience[];
}

export interface Project {
  title: string;
  isFeatured: boolean;
  thumbnails: Thumbnail;
  githubUrl: string;
  liveUrl: string;
}

export interface Projects {
  projects: Project[];
}

export interface Thumbnail {
  png: string;
  jpg?: string;
  avif?: string;
  webp?: string;
}

export interface ILink {
  title: string;
  href: string;
}
