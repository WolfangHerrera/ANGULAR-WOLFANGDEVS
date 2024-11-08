import { Component, Input } from "@angular/core";
import { homeMessages } from "src/app/utils/type/messages/home/message.type";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  @Input() textComponent!: homeMessages;

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
