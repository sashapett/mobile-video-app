export type LayoutType = "FULL_WIDTH" | "HALF_WIDTH";
export type ItemType = "CAT" | "HUMAN";

export interface Item {
  id: string;
  imageUrl: string;
  videoUrl: string;
  name: string;
  description: string;
  layout: LayoutType;
  tags: string[];
  autoplay: boolean;
  type: ItemType;
}
