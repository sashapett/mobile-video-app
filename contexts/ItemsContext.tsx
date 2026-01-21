import { createContext, ReactNode, useContext } from "react";
import { useItems } from "../hooks/useItems";
import { Item } from "../types";

interface ItemsContextType {
  items: Item[];
  loading: boolean;
  error: string | null;
  petItems: Item[];
  peopleItems: Item[];
}

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const { items, loading, error } = useItems();

  const petItems = items.filter((item) => item.type === "CAT");
  const peopleItems = items.filter((item) => item.type === "HUMAN");

  return (
    <ItemsContext.Provider
      value={{ items, loading, error, petItems, peopleItems }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItemsContext = () => {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error("useItemsContext must be used within ItemsProvider");
  }
  return context;
};
