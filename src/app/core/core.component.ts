import { Component, ElementRef } from "@angular/core";
import { LanguageService } from "./services/language/language.service";
import { homeMessages } from "../utils/type/messages/home/message.type";
import { headerMessages } from "../utils/type/messages/shared/header/message.type";
import { aboutMessages } from "../utils/type/messages/about/message.type";
import { experienceMessages } from "../utils/type/messages/experience/message.type";
import { contactMessages } from "../utils/type/messages/contact/message.type";
import { footerMessages } from "../utils/type/messages/shared/footer/message.type";

@Component({
  selector: "app-core",
  templateUrl: "./core.component.html",
  styleUrls: ["./core.component.scss"],
})
export class CoreComponent {
  textComponentHeader!: headerMessages;
  textComponentHome!: homeMessages;
  textComponentAbout!: aboutMessages;
  textComponentExperience!: experienceMessages;
  textComponentContact!: contactMessages;
  textComponentFooter!: footerMessages;
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
    this.textComponentContact = this.languageService.returnContactMessages();
    this.textComponentFooter = this.languageService.returnFooterMessages();
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
