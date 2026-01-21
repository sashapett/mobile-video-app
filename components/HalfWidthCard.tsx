import { Item } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { useRef, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
const PADDING = 16;
const GAP = 12;
const CARD_WIDTH = (width - PADDING * 2 - GAP) / 2;

interface HalfWidthCardProps {
  item: Item;
}

export const HalfWidthCard = ({ item }: HalfWidthCardProps) => {
  const videoRef = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(item.autoplay);
  const hasBadge = item.tags.length > 0;

  const togglePlayPause = async () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      await videoRef.current.pauseAsync();
      setIsPlaying(false);
    } else {
      await videoRef.current.playAsync();
      setIsPlaying(true);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{ uri: item.videoUrl }}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
          shouldPlay={isPlaying}
          isLooping={true}
          isMuted={true}
        />
        <View style={styles.topBar}>
          <Pressable style={styles.playButton} onPress={togglePlayPause}>
            <Ionicons
              name={isPlaying ? "pause-circle" : "play-circle"}
              size={38}
              color="rgba(255,255,255,0.9)"
            />
          </Pressable>

          {hasBadge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.tags[0].toUpperCase()}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.arrow}>›</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxWidth: CARD_WIDTH,
    backgroundColor: "#1c1c1e",
    borderRadius: 16,
    overflow: "hidden",
  },
  videoContainer: {
    width: "100%",
    height: 220,
    position: "relative",
    backgroundColor: "#000",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  topBar: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)", // ADDING SHADOW
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  playButton: {
    padding: 6, // INCREASE TAP AREA
  },
  badge: {
    backgroundColor: "rgba(60, 60, 67, 0.9)",
    paddingHorizontal: 10,
    marginRight: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    flex: 1,
  },
  arrow: {
    fontSize: 24,
    color: "#fff",
    marginLeft: 8,
  },
});
