import { FullWidthCard } from "@/components/FullWidthCard";
import { HalfWidthRow } from "@/components/HalfWidthRow";
import { useItemsContext } from "@/contexts/ItemsContext";
import { Item } from "@/types";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function PetsTab() {
  const { groupedPetItems, loading, error } = useItemsContext();

  const getItemKey = (item: Item | Item[]) => {
    if (Array.isArray(item)) {
      return item.map((i) => i.id).join("-");
    }
    return item.id;
  };

  const renderItem = ({ item }: { item: Item | Item[] }) => {
    if (Array.isArray(item)) {
      return <HalfWidthRow items={item} />;
    }
    return <FullWidthCard item={item} />;
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={groupedPetItems}
        keyExtractor={getItemKey}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  listContent: {
    padding: 16,
  },
  errorText: {
    color: "#ff3b30",
    fontSize: 16,
  },
});
