import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  ES_BODY_MESSAGES,
  EN_BODY_MESSAGES,
} from "src/app/utils/messages/body/messages";
import { languageType } from "src/app/utils/type/language.type";
import { bodyMessages } from "src/app/utils/type/messages/body/messages.type";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  currentLanguage: languageType = "EN";
  constructor() {}

  setLanguage(language: languageType) {
    this.currentLanguage = language;
  }

  getLanguage() {
    return this.currentLanguage;
  }

  returnBodyMessages(): bodyMessages {
    return this.currentLanguage === "EN" ? EN_BODY_MESSAGES : ES_BODY_MESSAGES;
  }
}
