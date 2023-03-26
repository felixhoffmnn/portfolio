export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string[];
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}
