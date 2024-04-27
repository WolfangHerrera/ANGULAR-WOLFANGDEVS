import { Component } from "@angular/core";
@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
})
export class BodyComponent {
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
