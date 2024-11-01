import { Injectable } from "@angular/core";
import { languageType } from "src/app/utils/type/language.type";
import { homeMessages } from "src/app/utils/type/messages/home/message.type";
import {
  EN_HOME_MESSAGES,
  ES_HOME_MESSAGES,
} from "src/app/utils/messages/home/message";
import {
  EN_HEADER_MESSAGES,
  ES_HEADER_MESSAGES,
} from "src/app/utils/messages/shared/header/message";
import { headerMessages } from "src/app/utils/type/messages/shared/header/message.type";
@Injectable({
  providedIn: "root",
})
export class LanguageService {
  currentLanguage: languageType;
  constructor() {
    this.currentLanguage = "EN";
  }

  setLanguage(language: languageType) {
    this.currentLanguage = language;
  }

  getLanguage() {
    return this.currentLanguage;
  }

  returnHomeMessages(): homeMessages {
    return this.currentLanguage === "EN" ? EN_HOME_MESSAGES : ES_HOME_MESSAGES;
  }

  returnHeaderMessages(): headerMessages {
    return this.currentLanguage === "EN"
      ? EN_HEADER_MESSAGES
      : ES_HEADER_MESSAGES;
  }
}
