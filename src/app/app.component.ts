import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  receiveData(data: string) {
    console.log(data);
    const targetElement = this.elementRef.nativeElement.querySelector(
      "#" + data
    );
    console.log(targetElement);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
