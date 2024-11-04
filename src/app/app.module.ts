import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./core/home/home.component";
import { HeaderComponent } from "./core/shared/header/header.component";
import { AboutComponent } from "./core/about/about.component";
import { ExperienceComponent } from "./core/experience/experience.component";
import { PortfolioComponent } from "./core/portfolio/portfolio.component";
import { ContactComponent } from "./core/contact/contact.component";
import { FooterComponent } from "./core/shared/footer/footer.component";
import { LanguageComponent } from "./core/shared/language/language/language.component";
import { FormsModule } from "@angular/forms";
import { RRModule } from "./mfe/rr/rr.module";
import { CoreComponent } from "./core/core.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    LanguageComponent,
    CoreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RRModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
