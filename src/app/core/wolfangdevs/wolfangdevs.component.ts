import { Component, ElementRef, OnInit } from "@angular/core";
import { LanguageService } from "src/app/services/language/language.service";
import { aboutMessages } from "../../utils/type/messages/about/message.type";
import { bodyMessages } from "../../utils/type/messages/body/message.type";
import { contactMessages } from "../../utils/type/messages/contact/message.type";
import { experienceMessages } from "../../utils/type/messages/experience/message.type";
import { footerMessages } from "../../utils/type/messages/shared/footer/message.type";
import { headerMessages } from "../../utils/type/messages/shared/header/message.type";

@Component({
  selector: "app-wolfangdevs",
  templateUrl: "./wolfangdevs.component.html",
  styleUrls: ["./wolfangdevs.component.scss"],
})
export class WolfangdevsComponent implements OnInit {
  textComponentHeader!: headerMessages;
  textComponentHome!: bodyMessages;
  textComponentAbout!: aboutMessages;
  textComponentExperience!: experienceMessages;
  textComponentContact!: contactMessages;
  textComponentFooter!: footerMessages;
  constructor(
    private elementRef: ElementRef,
    private readonly languageService: LanguageService
  ) {}

  ngOnInit(): void {
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
