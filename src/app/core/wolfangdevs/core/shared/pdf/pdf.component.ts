import { Component } from "@angular/core";

@Component({
  selector: "app-pdf",
  templateUrl: "./pdf.component.html",
  styleUrls: ["./pdf.component.scss"],
})
export class PdfComponent {
  zoomPDF: number = 0.4;
  disableSpinner = false;
  pdfUrl = "/assets/CV-HIGH.pdf";

  constructor() {}

  onPdfLoadComplete(event: any) {
    if (event) {
      setTimeout(() => {
        this.disableSpinner = true;
      }, 1500);
    }
  }
  zoomIn() {
    this.zoomPDF += 0.05;
  }

  zoomOut() {
    this.zoomPDF -= 0.05;
  }
}
