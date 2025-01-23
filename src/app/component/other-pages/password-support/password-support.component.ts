import { Component } from "@angular/core";
import { SvgIconComponent } from "../../../shared/components/common/svg-icon/svg-icon.component";
import { RouterLink } from "@angular/router";
import { FeatherIconComponent } from "../../../shared/components/common/feather-icon/feather-icon.component";
import { LoadingComponent } from "../../../shared/skeleton-loader/widgets/loading/loading.component";
import { CommonService } from "../../../shared/services/common.service";

@Component({
  selector: "app-password-support",
  standalone: true,
  imports: [
    SvgIconComponent,
    RouterLink,
    FeatherIconComponent,
    LoadingComponent,
  ],
  templateUrl: "./password-support.component.html",
  styleUrl: "./password-support.component.scss",
})
export class PasswordSupportComponent {
  constructor(public commonServices: CommonService) {}
  public show: boolean = false;
}
