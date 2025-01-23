import { Component, Input } from "@angular/core";
import { CommonService } from "../../../../services/common.service";
import { profile } from "../../../../interface/post";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-post-header2",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./post-header2.component.html",
  styleUrl: "./post-header2.component.scss",
})
export class PostHeader2Component {
  public isShow: boolean = false;
  @Input() postData: profile;
  constructor(public commonServices: CommonService) {}

  outSideClose() {
    this.isShow = false;
  }
}
