import { Component, Input } from "@angular/core";
import { footerMessages } from "../../../utils/type/messages/shared/footer/message.type";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  @Input() textComponent!: footerMessages;
}
