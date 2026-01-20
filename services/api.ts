import { mockData } from "../data/mockData";
import { Item } from "../types";

/**
 * GET /api/home
 */
export const fetchHomeItems = async (): Promise<Item[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockData;
};

/**
 * GET /api/item/[id]
 */
export const fetchItem = async (id: string): Promise<Item> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const item = mockData.find((item) => item.id === id);

  if (!item) {
    throw new Error("Item not found");
  }

  return item;
};
