import { Routes } from "@angular/router";
import { AdminGuard } from "./shared/auth-guard/auth.guard";
import { ContentComponent } from "./shared/components/layout/content/content.component";
import { FullComponent } from "./shared/components/layout/full/full.component";
import { fullRoutes } from "./shared/routes/full-routes";
import { contentRoutes } from "./shared/routes/routes";
import { AuthLoginComponent } from "./auth/auth-login/auth-login.component";
import { LoginComponent } from "./component/other-pages/login/login.component";
import { RegisterComponent } from "./component/other-pages/register/register.component";
import { PasswordSupportComponent } from "./component/other-pages/password-support/password-support.component";
import { LifeProfileComponent } from "./shared/components/common/life-profile/life-profile.component";
import { MuralPrototypeComponent } from "./shared/components/common/mural-prototype/mural-prototype.component";
import { MuralEditableComponent } from "./shared/components/common/mural-editable/mural-editable.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "password-support",
        component: PasswordSupportComponent,
      },
    ],
  },
  {
    path: "",
    component: ContentComponent,
    children: contentRoutes,
    canActivate: [AdminGuard],
  },
  {
    path: "life-profile",
    component: LifeProfileComponent,
  },
  {
    path: "mural-prototype",
    component: MuralPrototypeComponent,
  },
  {
    path: "mural-editable",
    component: MuralEditableComponent,
  },
  {
    path: "",
    component: FullComponent,
    children: fullRoutes,
    canActivate: [AdminGuard],
  },

  { path: "**", redirectTo: "company/404" },
];
