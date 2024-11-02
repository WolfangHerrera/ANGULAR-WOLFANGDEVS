import { Component, ElementRef, EventEmitter } from "@angular/core";
import { LanguageService } from "./services/language/language.service";
import { homeMessages } from "./utils/type/messages/home/message.type";
import { headerMessages } from "./utils/type/messages/shared/header/message.type";
import { aboutMessages } from "./utils/type/messages/about/message.type";
import { experienceMessages } from "./utils/type/messages/experience/message.type";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  textComponentHeader!: headerMessages;
  textComponentHome!: homeMessages;
  textComponentAbout!: aboutMessages;
  textComponentExperience!: experienceMessages;
  constructor(
    private elementRef: ElementRef,
    private readonly languageService: LanguageService
  ) {
    this.flagChangeLanguage();
  }
  flagChangeLanguage() {
    this.textComponentHeader = this.languageService.returnHeaderMessages();
    this.textComponentHome = this.languageService.returnHomeMessages();
    this.textComponentAbout = this.languageService.returnAboutMessages();
    this.textComponentExperience =
      this.languageService.returnExperienceMessages();
  }
  scrollDownToComponent(component: string) {
    const targetElement = this.elementRef.nativeElement.querySelector(
      "#" + component
    );
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
