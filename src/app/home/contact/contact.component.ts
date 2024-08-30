import { Component } from "@angular/core";
import { ContactForm } from "./contact.model";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  contact: ContactForm = {
    name: "",
    subject: "",
    message: "",
  };

  createWhatsappLink(contact: ContactForm): string {
    if (!contact.name && !contact.subject) {
      contact = {
        name: "WolfangDevs",
        subject: "Your services like as Freelancer",
        message: "Thanks.",
      };
    }
    return `https://api.whatsapp.com/send?phone=3134508305&text=Hey, I'm ${contact.name}, So I would like to know: ${contact.subject}. ${contact.message}`;
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
      const whatsapp = this.createWhatsappLink(this.contact);
      window.open(whatsapp, "_blank");
    } else if (buttonId === "email") {
      const mailto = this.createMailtoLink(this.contact);
      window.open(mailto, "_blank");
    }
  }
}
