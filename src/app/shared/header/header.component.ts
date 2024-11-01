import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";

import { componentType } from "src/app/utils/type/component.type";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @ViewChild("home") home!: ElementRef;
  @ViewChild("about") about!: ElementRef;
  @ViewChild("contact") contact!: ElementRef;
  @ViewChild("portfolio") portfolio!: ElementRef;
  @Output() componentSelected = new EventEmitter<componentType>();

  scrollToComponent(component: componentType) {
    this.componentSelected.emit(component);
  }
}
