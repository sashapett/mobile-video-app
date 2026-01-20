import { Item } from "../types";

export const mockData: Item[] = [
  // CAT Items
  {
    id: "1",
    imageUrl: "https://picsum.photos/seed/cat1/800/600",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    name: "Vintage Christmas",
    description: "80s Christmas nostalgia",
    layout: "FULL_WIDTH",
    tags: ["new", "featured"],
    autoplay: true,
    type: "CAT",
  },
  {
    id: "2",
    imageUrl: "https://picsum.photos/seed/cat2/400/300",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    name: "Playful Kitten",
    description: "Cute kitten playing",
    layout: "HALF_WIDTH",
    tags: ["popular"],
    autoplay: false,
    type: "CAT",
  },
  {
    id: "3",
    imageUrl: "https://picsum.photos/seed/cat3/400/300",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    name: "Sleepy Cat",
    description: "Cat taking a nap",
    layout: "HALF_WIDTH",
    tags: ["trending"],
    autoplay: false,
    type: "CAT",
  },
  {
    id: "4",
    imageUrl: "https://picsum.photos/seed/cat4/800/600",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    name: "Adventure Cat",
    description: "Cat exploring outdoors",
    layout: "FULL_WIDTH",
    tags: ["adventure"],
    autoplay: true,
    type: "CAT",
  },

  // HUMAN Items
  {
    id: "5",
    imageUrl: "https://picsum.photos/seed/human1/800/600",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    name: "Dancing Performance",
    description: "Amazing dance routine",
    layout: "FULL_WIDTH",
    tags: ["new"],
    autoplay: true,
    type: "HUMAN",
  },
  {
    id: "6",
    imageUrl: "https://picsum.photos/seed/human2/400/300",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    name: "Cooking Tutorial",
    description: "Learn to cook pasta",
    layout: "HALF_WIDTH",
    tags: ["tutorial"],
    autoplay: false,
    type: "HUMAN",
  },
  {
    id: "7",
    imageUrl: "https://picsum.photos/seed/human3/400/300",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    name: "Fitness Workout",
    description: "10-minute home workout",
    layout: "HALF_WIDTH",
    tags: ["fitness"],
    autoplay: false,
    type: "HUMAN",
  },
  {
    id: "8",
    imageUrl: "https://picsum.photos/seed/human4/800/600",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    name: "Travel Vlog",
    description: "Exploring beautiful places",
    layout: "FULL_WIDTH",
    tags: ["travel", "featured"],
    autoplay: true,
    type: "HUMAN",
  },
];
