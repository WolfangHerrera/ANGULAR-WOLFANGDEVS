export type experienceMessages = {
  title: string;
  subtitle: string;
  experience: experienceText[];
};

type experienceText = {
  title: string;
  type: string;
  dateStart: string;
  dateEnd?: string;
  subtitle: string;
  description: string[];
};
