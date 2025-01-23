import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonService } from "../../../services/common.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import feather from "feather-icons";
import { OpenModalComponent } from "../gallery/open-modal/open-modal.component";
import { introMySelf } from "../../../data/profile-pages/time-line";
import { friendSuggestion } from "../../../interface/common";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { RouterModule } from "@angular/router";
import { FeatherIconComponent } from "../feather-icon/feather-icon.component";
import { ProfileContentComponent } from "../../../../component/profile-pages/widgets/profile-pages/profile-content/profile-content.component";
import { InformacionMuralComponent } from "../../../../component/profile-pages/widgets/model/informacion-mural/informacion-mural.component";
import { EsquelaComponent } from "../../../../component/profile-pages/widgets/model/esquela/esquela.component";

@Component({
  selector: "app-mural-prototype",
  standalone: true,
  imports: [
    RouterModule,
    CarouselModule,
    CommonModule,
    FeatherIconComponent,
    ProfileContentComponent,
  ],
  templateUrl: "./mural-prototype.component.html",
  styleUrl: "./mural-prototype.component.scss",
})
export class MuralPrototypeComponent {
  public introMySelf = introMySelf;
  public isShow: boolean = false;
  public friendSuggestion3: friendSuggestion[];

  public friendSuggestionOptions: OwlOptions = {
    loop: false,
    dotsEach: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMTUgMThsLTYtNmw2LTYiLz48L3N2Zz4=" alt=""  style="display: flex"/>',
      '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtOSAxOGw2LTZsLTYtNiIvPjwvc3ZnPg==" class="img-fluid bg-img" alt=""  style="display: flex"/>',
    ],
    nav: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 1,
      },
    },
  };
  constructor(
    public commonServices: CommonService,
    public modalServices: NgbModal
  ) {}

  ngAfterViewInit() {
    feather.replace();
  }

  ngOnInit() {
    this.openinformacionPersonal();
    this.commonServices.friendSuggestion().subscribe((response) => {
      if (response.friendSuggestion) {
        this.friendSuggestion3 = response.friendSuggestion3;
      }
    });
  }

  openinformacionPersonal() {
    this.modalServices.open(InformacionMuralComponent, {
      size: "lg",
    });
  }

  openesquela() {
    this.modalServices.open(EsquelaComponent, {
      size: "md",
    });
  }

  openModel() {
    this.modalServices.open(OpenModalComponent, {
      fullscreen: true,
      windowClass: "comment-model",
    });
  }

  outSideClose() {
    this.isShow = false;
  }
}
