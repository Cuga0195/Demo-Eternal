import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostHeaderComponent } from "../posts/post-header/post-header.component";
import { profile } from "../../../interface/post";
import { FavoritePagesService } from "../../../services/favorite-pages.service";
import { CommonService } from "../../../services/common.service";
import { Router } from "@angular/router";
import { CondolencesComponent } from "../activity-feed/condolences/condolences.component";
import { PostHeader2Component } from "../posts/post-header2/post-header2.component";
import { PostHeader3Component } from "../posts/post-header3/post-header3.component";

@Component({
  selector: "app-messages",
  standalone: true,
  imports: [
    CommonModule,
    PostHeaderComponent,
    CondolencesComponent,
    PostHeader2Component,
    PostHeader3Component,
  ],
  templateUrl: "./messages.component.html",
  styleUrl: "./messages.component.scss",
})
export class MessagesComponent {
  public openTab: string = "Pendientes";
  public post: profile[];
  public post2: profile[];
  public post3: profile[];
  public currentUrl: string;

  constructor(
    public favoritePagesService: FavoritePagesService,
    public commonServices: CommonService,
    private router: Router
  ) {
    this.currentUrl = this.router.url;
  }

  ngOnInit() {
    this.favoritePagesService.post().subscribe((data) => {
      this.post = data.reviewPost;
      this.post2 = data.publicadosPost;
      this.post3 = data.rechazadosPost;
    });
  }

  changeTab(val: string) {
    this.openTab = val;
  }
}
