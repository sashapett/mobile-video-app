import { mockData } from "@/data/mockData";
import { Item } from "@/types";

/**
 * GET /api/home
 */
export const fetchHomeItems = async (): Promise<Item[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockData;
};
