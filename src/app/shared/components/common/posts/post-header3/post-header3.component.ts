import { Component, Input } from "@angular/core";
import { CommonService } from "../../../../services/common.service";
import { profile } from "../../../../interface/post";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-post-header3",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./post-header3.component.html",
  styleUrl: "./post-header3.component.scss",
})
export class PostHeader3Component {
  public isShow: boolean = false;
  @Input() postData: profile;
  constructor(public commonServices: CommonService) {}

  outSideClose() {
    this.isShow = false;
  }
}
