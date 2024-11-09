import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoomComponent } from "./room/room.component";
import { loadRemoteModule } from "@angular-architects/module-federation";

const routes: Routes = [
  {
    path: "",
    component: RoomComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          loadRemoteModule({
            type: "module",
            remoteEntry: "https://main.d1wcfb0e5v1dhf.amplifyapp.com/remoteEntry.js",
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MfeRoutingModule {}
