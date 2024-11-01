export type aboutMessages = {
  title: string;
  classPerson: classPerson;
  returnStrClass: string[];
  returnClass: string;
};

type classPerson = {
  name: string;
  age: number;
  gender: string;
  phone: string;
  language: personLanguage;
  skills: personSkills;
  hobbies: string;
};

type personLanguage = ["Español", "Ingles"] | ["English", "Spanish"];

type personSkills = [
  "Flask",
  "NodeJS",
  "SprintBoot",
  "MFE",
  "StencilJS",
  "Docker",
  "NoSQL",
  "AWS",
  "CD/CI",
  "Git",
  "UnitTest",
  "CleanCode"
];
