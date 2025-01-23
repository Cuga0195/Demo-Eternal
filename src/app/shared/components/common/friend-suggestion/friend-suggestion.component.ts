import { CommonModule } from "@angular/common";
import { Component, AfterViewInit } from "@angular/core";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { CommonService } from "../../../services/common.service";
import { RouterModule } from "@angular/router";
import feather from "feather-icons";
import { FeatherIconComponent } from "../feather-icon/feather-icon.component";
import { friendSuggestion } from "../../../interface/common";
import { ClickOutSideDirective } from "../../../directives/click-out-side.directive";
import { OpenModalComponent } from "../gallery/open-modal/open-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-friend-suggestion",
  templateUrl: "./friend-suggestion.component.html",
  styleUrl: "./friend-suggestion.component.scss",
  imports: [
    FeatherIconComponent,
    CommonModule,
    CarouselModule,
    ClickOutSideDirective,
    RouterModule,
  ],
  standalone: true,
})
export class FriendSuggestionComponent implements AfterViewInit {
  public isShow: boolean = false;
  public friendSuggestion: friendSuggestion[];

  public friendSuggestionOptions: OwlOptions = {
    loop: false,
    dotsEach: true,
    margin: 20,
    autoplay: false,
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
        this.friendSuggestion = response.friendSuggestion;
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
