export type contactMessages = {
  title: string;
  subtitle: string;
  name: string;
  email: string;
  message: string;
  button: buttonContact[];
};

type buttonContact = {
  title: string;
  icon: string;
  link: string;
};
