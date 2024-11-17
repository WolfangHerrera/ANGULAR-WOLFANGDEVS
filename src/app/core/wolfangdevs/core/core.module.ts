import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ExperienceComponent } from "./experience/experience.component";
import { BodyComponent } from "./body/body.component";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { LanguageComponent } from "./shared/language/language.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { PdfComponent } from './shared/pdf/pdf.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    LanguageComponent,
    PdfComponent,
  ],
  imports: [CommonModule, FormsModule, PdfViewerModule],
  exports: [
    HeaderComponent,
    BodyComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    LanguageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
