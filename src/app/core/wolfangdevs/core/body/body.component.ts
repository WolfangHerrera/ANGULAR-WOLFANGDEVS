import { Component, Input, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { bodyMessages } from "../../utils/type/messages/body/message.type";

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
    window.open("shared/pdf", "_blank");
  }
}
