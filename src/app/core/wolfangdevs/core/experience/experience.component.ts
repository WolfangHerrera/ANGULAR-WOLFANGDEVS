import { Component, Input } from "@angular/core";
import { experienceMessages } from "../../../../utils/type/messages/experience/message.type";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent {
  @Input() textComponent!: experienceMessages;
}
