import { Injectable } from "@angular/core";
import {
  EN_ABOUT_MESSAGES,
  ES_ABOUT_MESSAGES,
} from "../../utils/messages/about/message";
import {
  EN_BODY_MESSAGES,
  ES_BODY_MESSAGES,
} from "../../utils/messages/body/message";
import {
  EN_CONTACT_MESSAGES,
  ES_CONTACT_MESSAGES,
} from "../../utils/messages/contact/message";
import {
  EN_EXPERIENCE_MESSAGES,
  ES_EXPERIENCE_MESSAGES,
} from "../../utils/messages/experience/message";
import {
  EN_FOOTER_MESSAGES,
  ES_FOOTER_MESSAGES,
} from "../../utils/messages/shared/footer/message";
import {
  EN_HEADER_MESSAGES,
  ES_HEADER_MESSAGES,
} from "../../utils/messages/shared/header/message";
import { languageType } from "../../utils/type/language.type";
import { bodyMessages } from "../../utils/type/messages/body/message.type";
import { headerMessages } from "../../utils/type/messages/shared/header/message.type";

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

  returnHomeMessages(): bodyMessages {
    return this.currentLanguage === "EN" ? EN_BODY_MESSAGES : ES_BODY_MESSAGES;
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
