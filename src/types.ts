interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills?: string[];
}
interface IExperiences {
  title: string;
  details: IExperience[];
}

export type { IExperience, IExperiences };
