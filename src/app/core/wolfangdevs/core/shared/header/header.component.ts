import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { componentType } from "../../../utils/type/component.type";
import { headerMessages } from "../../../utils/type/messages/shared/header/message.type";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @ViewChild("body") body!: ElementRef;
  @ViewChild("about") about!: ElementRef;
  @ViewChild("contact") contact!: ElementRef;
  @ViewChild("portfolio") portfolio!: ElementRef;
  @Output() componentSelected = new EventEmitter<componentType>();
  @Input() textComponent!: headerMessages;

  scrollToComponent(component: componentType) {
    this.componentSelected.emit(component);
  }
}
