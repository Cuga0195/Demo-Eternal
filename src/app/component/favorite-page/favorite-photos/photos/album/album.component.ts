import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeatherIconComponent } from "../../../../../shared/components/common/feather-icon/feather-icon.component";

import { SinglePageService } from "../../../../../shared/services/single-page.service";

import { album, gallery } from "../../../../../shared/interface/single-page";
import { CreateMuralComponent } from "../../../../profile-pages/widgets/model/create-mural/create-mural.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrl: "./album.component.scss",
  imports: [FeatherIconComponent, CommonModule],
  standalone: true,
})
export class AlbumComponent {
  public album: album[];
  public galleryOpen: gallery[];
  public isOpen: boolean = false;

  constructor(
    public singlePageServices: SinglePageService,
    public modalServices: NgbModal
  ) {}

  ngOnInit() {
    this.singlePageServices.photosGallery().subscribe((response) => {
      this.album = response.album;
      this.galleryOpen = response.galleryOpen;
    });
  }

  createMural() {
    this.modalServices.open(CreateMuralComponent, { size: "lg" });
  }
}
