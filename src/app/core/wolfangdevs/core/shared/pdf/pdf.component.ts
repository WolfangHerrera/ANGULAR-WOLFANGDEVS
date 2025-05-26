import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pdf",
  templateUrl: "./pdf.component.html",
  styleUrls: ["./pdf.component.scss"],
})
export class PdfComponent implements OnInit {
  zoomPDF: number = 0.5;
  disableSpinner = false;
  pdfUrl = "https://wolfangdevs-asset.s3.us-east-1.amazonaws.com/CV+-+Wolfang+Herrera.pdf";

  constructor() {
    this.setZoomLevel();
  }

  ngOnInit() {
    this.getPDF()
  }

  setZoomLevel() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.zoomPDF = 1.15;
    }
  }

  async getPDF() {

    const response = await fetch(this.pdfUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`No se pudo obtener el PDF: ${response.statusText}`);
    }

    const blob = await response.blob();

    this.pdfUrl = URL.createObjectURL(blob);
  }

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

  async downloadFile(): Promise<void> {
    const nameFile = "CV - Wolfang Herrera.pdf";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.pdfUrl, true);
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
