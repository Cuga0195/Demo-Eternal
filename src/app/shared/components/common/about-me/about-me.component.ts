import { Component, Input } from "@angular/core";
import { FeatherIconComponent } from "../feather-icon/feather-icon.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditProfileComponent } from "../../../../component/profile-pages/widgets/model/edit-profile/edit-profile.component";
import {
  introMySelf,
  introMySelfFooter,
} from "../../../data/profile-pages/time-line";
import { SvgIconComponent } from "../svg-icon/svg-icon.component";

@Component({
  selector: "app-about-me",
  standalone: true,
  imports: [FeatherIconComponent, SvgIconComponent],
  templateUrl: "./about-me.component.html",
  styleUrl: "./about-me.component.scss",
})
export class AboutMeComponent {
  @Input() introMySelf: introMySelf[];

  public introMySelfFooter = introMySelfFooter;

  constructor(public modalServices: NgbModal) {}

  editProfile() {
    this.modalServices.open(EditProfileComponent, { size: "lg" });
  }
}
