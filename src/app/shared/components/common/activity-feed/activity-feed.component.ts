import { Component } from "@angular/core";
import { activityFeed } from "../../../data/common";
import { CommonModule } from "@angular/common";
import { FeatherIconComponent } from "../feather-icon/feather-icon.component";
import { ClickOutSideDirective } from "../../../directives/click-out-side.directive";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateCondolenceComponent } from "../../../../component/profile-pages/widgets/model/create-condolence/create-condolence.component";
import { CondolencesComponent } from "./condolences/condolences.component";

@Component({
  selector: "app-activity-feed",
  standalone: true,
  imports: [
    FeatherIconComponent,
    CommonModule,
    ClickOutSideDirective,
    CondolencesComponent,
  ],
  templateUrl: "./activity-feed.component.html",
  styleUrl: "./activity-feed.component.scss",
})
export class ActivityFeedComponent {
  public activityFeed = activityFeed;
  public isShow: boolean = false;
  constructor(public modalServices: NgbModal) {}
  outSideClose() {
    this.isShow = false;
  }
  createCondolence() {
    this.modalServices.open(CreateCondolenceComponent, { size: "lg" });
  }
  ngAfterViewInit() {
    const botonabajo = document.querySelector("#botonsitoabajo");
    const obtenerpixeles = () =>
      document.documentElement.scrollTop || document.body.scrollTop;
    const apareceboton = () => {
      const esMovil = window.innerWidth <= 768; // Puedes ajustar el tamaño según lo necesites
      const pixelThreshold = esMovil ? 1010 : 650;
      if (obtenerpixeles() > pixelThreshold) {
        botonabajo?.classList.add("mostrar");
        botonabajo?.classList.remove("ocultar");
      } else {
        botonabajo?.classList.add("ocultar");
        botonabajo?.classList.remove("mostrar");
      }
    };
    window.addEventListener("scroll", apareceboton);
  }
}
