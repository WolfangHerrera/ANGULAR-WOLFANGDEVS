export type experienceMessages = {
  title: string;
  experience: experienceText[];
};

type experienceText = {
  title: string;
  type: string;
  icon: string;
  dateStart: string;
  dateEnd?: string;
  subtitle: string;
  description: string[];
};
