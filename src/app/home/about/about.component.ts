import { Component, Input } from "@angular/core";
import { aboutMessages } from "src/app/utils/type/messages/about/message.type";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  @Input() textComponent!: aboutMessages;
}
