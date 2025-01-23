export interface choosePhoto {
  id?: string;
  check?: boolean;
  image: string;
  title?: string;
}

export interface introMySelf {
  icon: string;
  title: string;
  sunTitle: string;
  type: string;
}

export const uploaded: choosePhoto[] = [
  {
    id: "chk-ani1",
    check: true,
    image: "assets/images/post/10.jpg",
  },
  {
    id: "chk-ani2",
    check: false,
    image: "assets/images/post/9.jpg",
  },
  {
    id: "chk-ani3",
    check: false,
    image: "assets/images/post/8.jpg",
  },
  {
    id: "chk-ani4",
    check: false,
    image: "assets/images/post/7.jpg",
  },
  {
    id: "chk-ani5",
    check: false,
    image: "assets/images/post/6.jpg",
  },
  {
    id: "chk-ani6",
    check: false,
    image: "assets/images/post/5.jpg",
  },
];

export const album: choosePhoto[] = [
  {
    title: "Cover photos",
    image: "assets/images/post/3.jpg",
  },
  {
    title: "profile photos",
    image: "assets/images/post/4.jpg",
  },
  {
    title: "family trip",
    image: "assets/images/post/10.jpg",
  },
];

export const closeAlbum: choosePhoto[] = [
  {
    id: "chk-ani11",
    check: true,
    image: "assets/images/post/1.jpg",
  },
  {
    id: "chk-ani12",
    check: false,
    image: "assets/images/post/2.jpg",
  },
  {
    id: "chk-ani13",
    check: false,
    image: "assets/images/post/3.jpg",
  },
  {
    id: "chk-ani14",
    check: false,
    image: "assets/images/post/4.jpg",
  },
  {
    id: "chk-ani15",
    check: false,
    image: "assets/images/post/5.jpg",
  },
  {
    id: "chk-ani16",
    check: false,
    image: "assets/images/post/6.jpg",
  },
];

export const introMySelf: introMySelf[] = [
  {
    icon: "briefcase",
    title: "Trabajo Taxista",
    sunTitle: "Lima - 2001",
    type: "feather",
  },
  {
    icon: "degree",
    title: "Estudiante de la Vida",
    sunTitle: "universidad de la calle - 2000",
    type: "svg",
  },
  {
    icon: "heart",
    title: "CASADO",
    sunTitle: "Maria Victoria Sifuentes",
    type: "feather",
  },
  {
    icon: "map-pin",
    title: "Vivio En Lima",
    sunTitle: "hasta la actualidad",
    type: "feather",
  },
];

export const introMySelfFooter = [
  {
    icon: "facebook",
    class: "fb",
  },
  {
    icon: "google",
    class: "tw",
  },
  {
    icon: "whatsapp",
    class: "wa",
  },
];

export const relationshipStatus = [
  {
    id: "exampleRadios1",
    label: "single",
    active: true,
  },
  {
    id: "exampleRadios2",
    label: "in a relationship",
    active: false,
  },
  {
    id: "exampleRadios3",
    label: "engaged",
    active: false,
  },
  {
    id: "exampleRadios4",
    label: "married",
    active: false,
  },
  {
    id: "exampleRadios5",
    label: "divorced",
    active: false,
  },
  {
    id: "exampleRadios6",
    label: "widowed",
    active: false,
  },
];
