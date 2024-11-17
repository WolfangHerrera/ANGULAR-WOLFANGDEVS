import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { PdfComponent } from "./core/wolfangdevs/core/shared/pdf/pdf.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./core/wolfangdevs/wolfangdevs.module").then(
        (m) => m.WolfangdevsModule
      ),
  },
  // {
  //   path: "mfe",
  //   children: [
  //     {
  //       path: "",
  //       loadChildren: () =>
  //         import("./core/mfe/mfe.module").then((m) => m.MfeModule),
  //     },
  //   ],
  // },
  { path: "shared/pdf", component: PdfComponent },
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
