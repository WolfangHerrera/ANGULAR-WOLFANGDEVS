import { Component, EventEmitter, Output } from "@angular/core";
import { LanguageService } from "src/app/core/wolfangdevs/services/language/language.service";
import { flagType } from "../../../utils/type/flag.type";
import { languageType } from "../../../utils/type/language.type";

@Component({
  selector: "app-language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.scss"],
})
export class LanguageComponent {
  currentLanguage: languageType;
  currentFlag: flagType;
  @Output() flagChangeLanguage = new EventEmitter<true>();

  constructor(private readonly languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
    this.currentFlag = this.getFlagFromAssets();
    this.flagChangeLanguage.emit(true);
  }

  changeLanguage() {
    this.currentLanguage = this.currentLanguage === "EN" ? "ES" : "EN";
    this.languageService.setLanguage(this.currentLanguage);
    this.currentFlag = this.getFlagFromAssets();
    this.flagChangeLanguage.emit(true);
  }

  getFlagFromAssets(): flagType {
    return this.currentLanguage === "ES"
      ? "assets/flags/us.svg"
      : "assets/flags/co.svg";
  }
}
