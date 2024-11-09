import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WolfangdevsRoutingModule } from "./wolfangdevs-routing.module";
import { CoreModule } from "./core/core.module";
import { WolfangdevsComponent } from "./wolfangdevs.component";

@NgModule({
  declarations: [WolfangdevsComponent],
  imports: [CommonModule, WolfangdevsRoutingModule, CoreModule],
  exports: [WolfangdevsComponent],
})
export class WolfangdevsModule {}
