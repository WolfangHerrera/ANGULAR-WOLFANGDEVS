import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./shared/header/header.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { LanguageComponent } from "./shared/language/language/language.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    LanguageComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    LanguageComponent,
  ],
})
export class CoreModule {}
