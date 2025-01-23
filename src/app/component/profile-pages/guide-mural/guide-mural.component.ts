import { Component } from "@angular/core";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { RouterModule } from "@angular/router";
import { CreateMuralComponent } from "../widgets/model/create-mural/create-mural.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FeatherIconComponent } from "../../../shared/components/common/feather-icon/feather-icon.component";

@Component({
  selector: "app-guide-mural",
  standalone: true,
  imports: [CarouselModule, RouterModule, FeatherIconComponent],
  templateUrl: "./guide-mural.component.html",
  styleUrl: "./guide-mural.component.scss",
})
export class GuideMuralComponent {
  public isShow: boolean = false;

  constructor(public modalServices: NgbModal) {}

  createMural() {
    this.modalServices.open(CreateMuralComponent, { size: "lg" });
  }

  public storyOptions = {
    loop: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  public carousalData = [
    {
      image: "assets/images/post/15.jpg",
    },
    {
      image: "assets/images/post/16.jpg",
    },
    {
      image: "assets/images/post/17.jpg",
    },
  ];
  clickOutside() {
    this.isShow = false;
  }
}
