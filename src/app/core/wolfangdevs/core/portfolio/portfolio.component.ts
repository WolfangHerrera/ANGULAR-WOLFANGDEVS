import { Component, Input } from "@angular/core";
import { portfolioMessages } from "../../utils/type/messages/portfolio/message.type";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent {
  @Input() textComponent!: portfolioMessages;
  constructor() {
  }
}
