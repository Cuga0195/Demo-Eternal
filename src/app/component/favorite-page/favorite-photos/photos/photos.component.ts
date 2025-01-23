import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AlbumComponent } from "./album/album.component";
import { GalleryPhotosComponent } from "./gallery-photos/gallery-photos.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateMuralComponent } from "../../../profile-pages/widgets/model/create-mural/create-mural.component";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrl: "./photos.component.scss",
  imports: [GalleryPhotosComponent, CommonModule, AlbumComponent],
  standalone: true,
})
export class PhotosComponent {
  constructor(public modalServices: NgbModal) {}
  createMural() {
    this.modalServices.open(CreateMuralComponent, { size: "lg" });
  }
  public openTab: string = "album";

  changeTab(val: string) {
    this.openTab = val;
  }
}
