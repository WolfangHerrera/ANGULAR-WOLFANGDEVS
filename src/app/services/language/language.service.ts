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
import {
  EN_ABOUT_MESSAGES,
  ES_ABOUT_MESSAGES,
} from "src/app/utils/messages/about/message";
import {
  EN_EXPERIENCE_MESSAGES,
  ES_EXPERIENCE_MESSAGES,
} from "src/app/utils/messages/experience/message";
import {
  EN_CONTACT_MESSAGES,
  ES_CONTACT_MESSAGES,
} from "src/app/utils/messages/contact/message";
import {
  EN_FOOTER_MESSAGES,
  ES_FOOTER_MESSAGES,
} from "src/app/utils/messages/shared/footer/message";
@Injectable({
  providedIn: "root",
})
export class LanguageService {
  currentLanguage: languageType = "EN";

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

  returnAboutMessages() {
    return this.currentLanguage === "EN"
      ? EN_ABOUT_MESSAGES
      : ES_ABOUT_MESSAGES;
  }

  returnExperienceMessages() {
    return this.currentLanguage === "EN"
      ? EN_EXPERIENCE_MESSAGES
      : ES_EXPERIENCE_MESSAGES;
  }

  returnContactMessages() {
    return this.currentLanguage === "EN"
      ? EN_CONTACT_MESSAGES
      : ES_CONTACT_MESSAGES;
  }

  returnFooterMessages() {
    return this.currentLanguage === "EN"
      ? EN_FOOTER_MESSAGES
      : ES_FOOTER_MESSAGES;
  }
}
