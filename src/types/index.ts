export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
}

export interface INavItemProps {
  text: string;
  link: string;
}

export interface IExperience {
  name: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnails: IThumbnail;
  githubUrl: string;
  liveUrl: string;
}

export interface IThumbnail {
  png: string;
  jpg?: string;
  avif?: string;
  webp?: string;
}

export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}

export interface ISocialMedia {
  title: string;
  href: string;
}
