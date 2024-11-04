import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RRComponent } from "./rr/rr.component";
import { RRRoutingModule } from "./rr-routing.module";

@NgModule({
  declarations: [RRComponent],
  imports: [CommonModule, RRRoutingModule],
})
export class RRModule {}
