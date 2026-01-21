import { Item } from "@/types";
import { StyleSheet, View } from "react-native";
import { HalfWidthCard } from "./HalfWidthCard";

interface HalfWidthRowProps {
  items: Item[];
}

export const HalfWidthRow = ({ items }: HalfWidthRowProps) => {
  return (
    <View style={styles.row}>
      {items.map((item) => (
        <HalfWidthCard key={item.id} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
});
