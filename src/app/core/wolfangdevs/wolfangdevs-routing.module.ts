import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WolfangdevsComponent } from "./wolfangdevs.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./core/core.module").then((module) => module.CoreModule),
      },
    ],
    component: WolfangdevsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WolfangdevsRoutingModule {}
