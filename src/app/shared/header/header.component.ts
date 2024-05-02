import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
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
  @Output() dataSent = new EventEmitter<string>();

  scrollToComponent(component: string) {
    this.dataSent.emit(component);
  }
}
