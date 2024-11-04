import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { loadRemoteModule } from "@angular-architects/module-federation";
import { RRComponent } from "./rr/rr.component";

const routesRR: Routes = [
  {
    path: "",
    component: RRComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          loadRemoteModule({
            type: "module",
            remoteEntry: "http://localhost:4207/remoteEntry.js",
            exposedModule: "./AppModule",
          })
            .then((m) => m.AppModule)
            .catch((err) => {
              console.error("Error loading remote module", err);
            }),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesRR)],
  exports: [RouterModule],
})
export class RRRoutingModule {}
