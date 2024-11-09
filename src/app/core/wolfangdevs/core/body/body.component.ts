import { Component, Input } from "@angular/core";
import { bodyMessages } from "../../../../utils/type/messages/body/message.type";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
})
export class BodyComponent {
  @Input() textComponent!: bodyMessages;

  constructor() {}

  downloadFile(): void {
    const url = "./assets/CV-WH.pdf";
    const nameFile = "CV - Wolfang Herrera.pdf";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = nameFile;
        link.click();
      }
    };
    xhr.send();
  }
}
