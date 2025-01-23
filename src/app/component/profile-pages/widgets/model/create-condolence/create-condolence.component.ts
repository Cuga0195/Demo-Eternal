import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FeatherIconComponent } from "../../../../../shared/components/common/feather-icon/feather-icon.component";
import { ChoosePhotoComponent } from "../choose-photo/choose-photo.component";

import { relationshipStatus } from "../../../../../shared/data/profile-pages/time-line";
import { SvgIconComponent } from "../../../../../shared/components/common/svg-icon/svg-icon.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-edit-profile",
  standalone: true,
  imports: [FeatherIconComponent, SvgIconComponent, FormsModule],
  templateUrl: "./create-condolence.component.html",
  styleUrl: "./create-condolence.component.scss",
})
export class CreateCondolenceComponent {
  nombres: string = "";
  apellidos: string = "";
  telefono: string = "";
  correo: string = "";
  parentesco: string = "";
  mensaje: string = "";
  public relationshipStatus = relationshipStatus;

  constructor(public modalServices: NgbModal) {}

  editImage() {
    this.modalServices.open(ChoosePhotoComponent, {
      size: "lg",
      windowClass: "Choose-photo-modal",
    });
  }
}
