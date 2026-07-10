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

interface IPublication {
  title: string;
  venue: string;
  date?: string;
  authors: string[];
  url?: string;
}

export type { IExperience, IExperiences, IPublication };
