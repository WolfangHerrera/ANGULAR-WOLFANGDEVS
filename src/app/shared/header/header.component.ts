import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild("home") home!: ElementRef;
  @ViewChild("about") about!: ElementRef;
  @ViewChild("contact") contact!: ElementRef;
  @ViewChild("portfolio") portfolio!: ElementRef;

  scrollToComponent(component: ElementRef) {
    component.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
