import { Component } from "@angular/core";
import {
  activityFeed,
  activityFeed2,
  activityFeed3,
} from "../../../../data/common";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-condolences",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./condolences.component.html",
  styleUrl: "./condolences.component.scss",
})
export class CondolencesComponent {
  public activityFeed = activityFeed;
  public activityFeed2 = activityFeed2;
  public activityFeed3 = activityFeed3;
  item: any;
}
