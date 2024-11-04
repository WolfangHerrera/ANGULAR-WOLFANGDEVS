import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreComponent } from "./core/core.component";

const routes: Routes = [
  {
    path: "",
    component: CoreComponent,
  },
  {
    path: "RR",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./mfe/rr/rr-routing.module").then((m) => m.RRRoutingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
