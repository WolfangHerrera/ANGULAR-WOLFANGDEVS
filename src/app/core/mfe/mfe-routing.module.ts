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
            remoteEntry:
              "http://mfe-room.s3-website-us-east-1.amazonaws.com/remoteEntry.js",
            exposedModule: "./AppModule",
          }).then((m) => m.AppModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MfeRoutingModule {}
