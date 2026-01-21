import { useItems } from "@/hooks/useItems";
import { Item } from "@/types";
import { groupItemsByLayout } from "@/utils/groupItems";
import { createContext, ReactNode, useContext, useMemo } from "react";

interface ItemsContextType {
  items: Item[];
  groupedPetItems: (Item | Item[])[];
  groupedPeopleItems: (Item | Item[])[];
  loading: boolean;
  error: string | null;
}

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const { items, loading, error } = useItems();

  const groupedPetItems = useMemo(() => {
    const pets = items.filter((item) => item.type === "CAT");
    return groupItemsByLayout(pets);
  }, [items]);

  const groupedPeopleItems = useMemo(() => {
    const people = items.filter((item) => item.type === "HUMAN");
    return groupItemsByLayout(people);
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        groupedPetItems,
        groupedPeopleItems,
        loading,
        error,
      }}
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
