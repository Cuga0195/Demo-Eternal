import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FeatherIconComponent } from "../../../../../shared/components/common/feather-icon/feather-icon.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-create-mural",
  standalone: true,
  imports: [FeatherIconComponent, CommonModule, RouterModule],
  templateUrl: "./create-mural.component.html",
  styleUrl: "./create-mural.component.scss",
})
export class CreateMuralComponent {
  constructor(public modalServices: NgbModal) {}

  tab1Visible = true; // Visible por defecto
  tab2Visible = false;
  tab3Visible = false;

  showTab(tabNumber: number) {
    this.tab1Visible = tabNumber === 1;
    this.tab2Visible = tabNumber === 2;
    this.tab3Visible = tabNumber === 3;
  }
}
