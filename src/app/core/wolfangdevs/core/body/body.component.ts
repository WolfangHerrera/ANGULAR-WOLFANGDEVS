import { Component, Input, OnInit } from "@angular/core";
import { bodyMessages } from "../../../../utils/type/messages/body/message.type";
import { Router } from "@angular/router";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
})
export class BodyComponent implements OnInit {
  disableSpinner = false;
  showPDF = false;
  @Input() textComponent!: bodyMessages;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.disableSpinner = true;
    }, 1000);
  }

  redirectPDF() {
    window.open("https://wolfangdevs-assets.s3.us-east-1.amazonaws.com/CV-HIGH.pdf", "_blank");
  }
}
