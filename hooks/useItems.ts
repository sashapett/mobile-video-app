import { useEffect, useState } from "react";
import { fetchHomeItems } from "../services/api";
import { Item } from "../types";

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchHomeItems();

        setItems(data);
      } catch (err) {
        setError("Failed to load items");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  return { items, loading, error };
};
