import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-vincular",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./vincular.component.html",
  styleUrl: "./vincular.component.scss",
})
export class VincularComponent {
  constructor(public modalServices: NgbModal) {}

  tab1Visible = true; // Visible por defecto
  tab2Visible = false;

  showTab(tabNumber: number) {
    this.tab1Visible = tabNumber === 1;
    this.tab2Visible = tabNumber === 2;
  }
}
