import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./core/wolfangdevs/wolfangdevs.module").then(
        (m) => m.WolfangdevsModule
      ),
  },
  // {
  //   path: "RR",
  //   children: [
  //     {
  //       path: "",
  //       loadChildren: () =>
  //         import("./mfe/rr/rr-routing.module").then((m) => m.RRRoutingModule),
  //     },
  //   ],
  // },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
