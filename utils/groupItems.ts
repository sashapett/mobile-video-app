import { Item } from "@/types";

export const groupItemsByLayout = (items: Item[]): (Item | Item[])[] => {
  const grouped: (Item | Item[])[] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.layout === "FULL_WIDTH") {
      grouped.push(item);
    } else {
      // HALF_WIDTH: check if next is also HALF_WIDTH
      const nextItem = items[i + 1];

      if (nextItem?.layout === "HALF_WIDTH") {
        grouped.push([item, nextItem]); // Pair them, two HALF_WIDTH items
        i++; // Skip next item
      } else {
        grouped.push([item]); // Single HALF_WIDTH item
      }
    }
  }

  return grouped;
};
