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

  onSubmit(event: Event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto del formulario

    const target = event.target as HTMLFormElement;
    const activeElement = document.activeElement as HTMLButtonElement;

    const buttonId = activeElement.id;  // Obtener el id del botón presionado

    console.log('Formulario enviado', this.contact);
    console.log('Botón presionado:', buttonId);

    // Aquí puedes manejar la lógica según el botón presionado
    if (buttonId === 'whatsapp-mobile' || buttonId === 'whatsapp-desktop') {
      // Lógica para el botón de WhatsApp
      console.log('Enviar mensaje de WhatsApp');
    } else if (buttonId === 'email-mobile' || buttonId === 'email-desktop') {
      // Lógica para el botón de Email
      console.log('Enviar mensaje por Email');
    }
  }
}
