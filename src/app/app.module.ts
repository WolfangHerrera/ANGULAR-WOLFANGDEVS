import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { RRModule } from "./mfe/rr/rr.module";
import { CoreComponent } from "./core/core.component";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent, CoreComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RRModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
