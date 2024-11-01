import { Component, ElementRef, EventEmitter } from "@angular/core";
import { LanguageService } from "./services/language/language.service";
import { bodyMessages } from "./utils/type/messages/body/messages.type";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  textComponentBody!: bodyMessages;
  constructor(
    private elementRef: ElementRef,
    private readonly languageService: LanguageService
  ) {}
  flagChangeLanguage(event: boolean) {
    if (event) {
      this.textComponentBody = this.languageService.returnBodyMessages();
    }
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
