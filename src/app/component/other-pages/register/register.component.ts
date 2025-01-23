import { Component } from "@angular/core";
import { SvgIconComponent } from "../../../shared/components/common/svg-icon/svg-icon.component";
import { RouterModule } from "@angular/router";
import { FeatherIconComponent } from "../../../shared/components/common/feather-icon/feather-icon.component";
import { LoadingComponent } from "../../../shared/skeleton-loader/widgets/loading/loading.component";
import { CommonService } from "../../../shared/services/common.service";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [
    SvgIconComponent,
    FeatherIconComponent,
    LoadingComponent,
    RouterModule,
  ],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  constructor(public commonServices: CommonService) {}
  public show: boolean = false;
}
