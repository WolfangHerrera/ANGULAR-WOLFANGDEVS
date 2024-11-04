import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "RR",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../app/core/mfe/rr/rr-routing.module").then(
            (m) => m.RRRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
