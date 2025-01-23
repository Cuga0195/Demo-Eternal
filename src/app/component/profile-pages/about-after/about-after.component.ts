import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditProfileComponent } from "../widgets/model/edit-profile/edit-profile.component";

@Component({
  selector: "app-about-after",
  standalone: true,
  imports: [],
  templateUrl: "./about-after.component.html",
  styleUrl: "./about-after.component.scss",
})
export class AboutAfterComponent {
  constructor(public modalServices: NgbModal) {}

  ngOnInit(): void {
    this.editProfile();
  }
  editProfile() {
    this.modalServices.open(EditProfileComponent, { size: "lg" });
  }
}
