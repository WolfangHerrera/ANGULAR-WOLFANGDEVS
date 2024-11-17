import { Component } from "@angular/core";

@Component({
  selector: "app-pdf",
  templateUrl: "./pdf.component.html",
  styleUrls: ["./pdf.component.scss"],
})
export class PdfComponent {
  zoomPDF: number = 0.5;
  disableSpinner = false;
  pdfUrl = "https://wolfangdevs-assets.s3.us-east-1.amazonaws.com/CV-HIGH.pdf";

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
    console.log(this.zoomPDF);
  }

  zoomOut() {
    this.zoomPDF -= 0.05;
  }
}
