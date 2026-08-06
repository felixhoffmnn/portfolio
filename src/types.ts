interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills?: string[];
}

interface IPublication {
  title: string;
  venue: string;
  date?: string;
  authors: string[];
  url?: string;
}

export type { IExperience, IPublication };
