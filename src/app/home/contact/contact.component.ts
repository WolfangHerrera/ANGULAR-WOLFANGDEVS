import { Component } from "@angular/core";
import { ContactForm } from "./contact.model";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  urlWhatsapp = "";
  urlMail = "";
  contact: ContactForm = {
    name: "",
    subject: "",
    message: "",
  };

  constructor() {
    this.eventButtonWhatsapp();
    this.eventButtonMail();
  }

  eventButtonWhatsapp() {
    this.urlWhatsapp = this.createWhatsappLink(this.contact);
    window.open(this.urlWhatsapp, "_blank", "noopener,noreferrer");
  }

  eventButtonMail() {
    this.urlMail = this.createMailtoLink(this.contact);
    window.open(this.urlMail, "_blank", "noopener,noreferrer");
  }

  createWhatsappLink(contact: ContactForm): string {
    if (!contact.name && !contact.subject) {
      contact = {
        name: "WolfangDevs",
        subject: "Your services like as Freelancer",
        message: "Thanks.",
      };
    }
    const text = `Hey, I'm ${contact.name}, So I would like to know: ${contact.subject}. ${contact.message}`;
    const encodedText = encodeURIComponent(text);
    console.log(text);

    return `https://wa.me/+573134508305?text=${encodedText}`;
  }

  createMailtoLink(contact: ContactForm): string {
    if (!contact.name && !contact.subject && !contact.message) {
      contact = {
        name: "WolfangDevs",
        subject: "Your services like as Freelancer",
        message: "Thanks.",
      };
    }
    const encodedSubject = encodeURIComponent(contact.subject);
    const encodedBody = encodeURIComponent(contact.message);
    return `mailto:andreyherrerac@icloud.com?subject=${encodedSubject}&body=${encodedBody}`;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const activeElement = document.activeElement as HTMLButtonElement;
    const buttonId = activeElement.id;

    if (buttonId === "whatsapp") {
      this.urlWhatsapp = this.createWhatsappLink(this.contact);
    } else if (buttonId === "email") {
      this.urlMail = this.createMailtoLink(this.contact);
    }
  }
}
