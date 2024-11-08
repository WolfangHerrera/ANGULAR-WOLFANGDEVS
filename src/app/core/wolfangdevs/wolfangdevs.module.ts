import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WolfangdevsRoutingModule } from "./wolfangdevs-routing.module";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "src/app/shared/footer/footer.component";
import { LanguageComponent } from "src/app/shared/language/language/language.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    LanguageComponent,
  ],
  imports: [CommonModule, WolfangdevsRoutingModule, FormsModule],
})
export class WolfangdevsModule {}
