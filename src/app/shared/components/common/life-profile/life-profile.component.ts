import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfilePagesComponent } from "../../../../component/profile-pages/widgets/profile-pages/profile-pages.component";
import { AboutIntroMySelfComponent } from "../about-intro-my-self/about-intro-my-self.component";
import { MenuComponent } from "../../../../component/profile-pages/tab/menu/menu.component";
import { introMySelf } from "../../../data/profile-pages/time-line";
import { RouterModule } from "@angular/router";
import { ProfileContentComponent } from "../../../../component/profile-pages/widgets/profile-pages/profile-content/profile-content.component";
import { FeatherIconComponent } from "../feather-icon/feather-icon.component";
import { friendSuggestion } from "../../../interface/common";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import feather from "feather-icons";
import { CommonService } from "../../../services/common.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { OpenModalComponent } from "../gallery/open-modal/open-modal.component";

@Component({
  selector: "app-life-profile",
  standalone: true,
  imports: [
    ProfilePagesComponent,
    AboutIntroMySelfComponent,
    MenuComponent,
    RouterModule,
    ProfileContentComponent,
    FeatherIconComponent,
    CarouselModule,
    CommonModule,
  ],
  templateUrl: "./life-profile.component.html",
  styleUrl: "./life-profile.component.scss",
})
export class LifeProfileComponent {
  public introMySelf = introMySelf;
  public isShow: boolean = false;
  public friendSuggestion2: friendSuggestion[];

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
    this.commonServices.friendSuggestion().subscribe((response) => {
      if (response.friendSuggestion) {
        this.friendSuggestion2 = response.friendSuggestion2;
      }
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
