import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FeatherIconComponent } from "../../../../shared/components/common/feather-icon/feather-icon.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { GuideMuralComponent } from "../../guide-mural/guide-mural.component";

@Component({
  selector: "app-profile-menu",
  standalone: true,
  imports: [FeatherIconComponent, RouterModule],
  templateUrl: "./profile-menu.component.html",
  styleUrl: "./profile-menu.component.scss",
})
export class ProfileMenuComponent {
  @Input() currentUrl: string;
  constructor(public modalServices: NgbModal) {}
  guideMural() {
    this.modalServices.open(GuideMuralComponent, {
      fullscreen: true,
      windowClass: "comment-model",
    });
  }
}
