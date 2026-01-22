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

const PeopleTab = () => {
  const { groupedPeopleItems, loading, error } = useItemsContext();

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
        data={groupedPeopleItems}
        keyExtractor={getItemKey}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2c2e",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c2c2e",
  },
  listContent: {
    padding: 16,
  },
  placeholder: {
    padding: 20,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  itemLayout: {
    fontSize: 12,
    color: "#999",
  },
  errorText: {
    color: "#ff3b30",
    fontSize: 16,
  },
});

export default PeopleTab;
