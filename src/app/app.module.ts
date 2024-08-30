import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BodyComponent } from "./home/body/body.component";
import { HeaderComponent } from "./shared/header/header.component";
import { AboutComponent } from "./home/about/about.component";
import { ExperienceComponent } from "./home/experience/experience.component";
import { PortfolioComponent } from "./home/portfolio/portfolio.component";
import { ContactComponent } from "./home/contact/contact.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
