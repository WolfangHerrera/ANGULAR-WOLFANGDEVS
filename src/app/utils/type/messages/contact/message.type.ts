export type contactMessages = ContactForm & {
  title: string;
  button: buttonContact[];
};

type buttonContact = {
  title: string;
  icon: string;
};

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
