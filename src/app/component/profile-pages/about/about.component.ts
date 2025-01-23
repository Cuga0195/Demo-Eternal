import { Component, Input } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { AboutIntroMySelfComponent } from "../../../shared/components/common/about-intro-my-self/about-intro-my-self.component";
import { HobbiesInterestComponent } from "../../../shared/components/common/hobbies-interest/hobbies-interest.component";
import { MenuComponent } from "../tab/menu/menu.component";
import { AboutFriendListComponent } from "../widgets/about-friend-list/about-friend-list.component";
import { ProfileMenuComponent } from "../widgets/profile-menu/profile-menu.component";
import { ProfilePagesComponent } from "../widgets/profile-pages/profile-pages.component";
import { CommonService } from "../../../shared/services/common.service";
import {
  educationWork,
  hobbyInterests,
  introMySelfAbout,
} from "../../../shared/data/profile-pages/about";
import { ProfileAboutSkeletonComponent } from "../../../shared/skeleton-loader/profile-pages-skeleton/profile-about-skeleton/profile-about-skeleton.component";
import { AboutMeComponent } from "../../../shared/components/common/about-me/about-me.component";
import { PhotosComponent } from "../../favorite-page/favorite-photos/photos/photos.component";
import { GuideMuralComponent } from "../guide-mural/guide-mural.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [
    ProfilePagesComponent,
    ProfileMenuComponent,
    AboutIntroMySelfComponent,
    ProfileAboutSkeletonComponent,
    HobbiesInterestComponent,
    AboutFriendListComponent,
    MenuComponent,
    AboutMeComponent,
    PhotosComponent,
    RouterOutlet,
  ],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent {
  public introMySelfAbout = introMySelfAbout;
  public hobbyInterest = hobbyInterests;
  public educationWork = educationWork;
  @Input() currentUrl: string;

  constructor(
    public commonServices: CommonService,
    private router: Router,
    public modalServices: NgbModal
  ) {
    this.currentUrl = this.router.url;
  }

  ngOnInit(): void {
    this.guideMural();
  }

  guideMural() {
    this.modalServices.open(GuideMuralComponent, {
      fullscreen: true,
      windowClass: "comment-model",
    });
  }
}
