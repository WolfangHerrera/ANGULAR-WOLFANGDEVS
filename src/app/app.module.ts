import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BodyComponent } from "./home/body/body.component";
import { HeaderComponent } from "./shared/header/header.component";
import { AboutComponent } from "./home/about/about.component";
import { ExperienceComponent } from "./home/experience/experience.component";
import { PortfolioComponent } from './home/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
