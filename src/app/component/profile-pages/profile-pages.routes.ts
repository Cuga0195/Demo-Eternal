import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ActivityFeedComponent } from "../../shared/components/common/activity-feed/activity-feed.component";
import { FriendsProfileComponent } from "./friends-profile/friends-profile.component";
import { FriendsComponent } from "./friends/friends.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { TabComponent } from "./tab/tab.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { FriendSuggestionComponent } from "../../shared/components/common/friend-suggestion/friend-suggestion.component";
import { LoginComponent } from "../other-pages/login/login.component";
import { PhotosComponent } from "../favorite-page/favorite-photos/photos/photos.component";
import { MessagesComponent } from "../../shared/components/common/messages/messages.component";
import { ServicesProfileComponent } from "../../shared/components/common/services-profile/services-profile.component";
import { AboutAfterComponent } from "./about-after/about-after.component";
import { GuideMuralComponent } from "./guide-mural/guide-mural.component";

export default [
  {
    path: "",
    children: [
      {
        path: "timeline",
        component: TimelineComponent,
        children: [
          {
            path: "friendSuggestion",
            component: FriendSuggestionComponent,
          },
          {
            path: "activityfeed",
            component: ActivityFeedComponent,
          },
        ],
      },
      {
        path: "about",
        component: AboutComponent,
        children: [
          {
            path: "services",
            component: ServicesProfileComponent,
          },
          {
            path: "murales",
            component: PhotosComponent,
          },
          {
            path: "condolencias",
            component: MessagesComponent,
          },
          {
            path: "guide-mural",
            component: GuideMuralComponent,
          },
        ],
      },
      {
        path: "about-after",
        component: AboutAfterComponent,
      },
      // {
      //     path: 'friends',
      //     component: FriendsComponent,
      // },
      // {
      //     path: 'gallery',
      //     component: GalleryComponent,
      // },{
      //     path: 'activity-feed',
      //     component: ActivityFeedComponent,
      // },
      // {
      //     path: 'tab',
      //     component: TabComponent,
      // },
      // {
      //     path: 'friend-profile',
      //     component: FriendsProfileComponent,
      // },
    ],
  },
] as Routes;
