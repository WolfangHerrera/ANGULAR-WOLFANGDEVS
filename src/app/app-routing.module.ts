import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./core/wolfangdevs/wolfangdevs.module").then(
        (m) => m.WolfangdevsModule
      ),
  },
  {
    path: "mfe",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./core/mfe/mfe.module").then((m) => m.MfeModule),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "mfe",
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
