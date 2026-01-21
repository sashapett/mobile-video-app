import { Item } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface FullWidthCardProps {
  item: Item;
}

export const FullWidthCard = ({ item }: FullWidthCardProps) => {
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
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1c1c1e",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
  },
  videoContainer: {
    width: "100%",
    height: 400,
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    borderRadius: 8,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  description: {
    fontSize: 15,
    color: "#8e8e93",
  },
  arrow: {
    fontSize: 32,
    color: "#fff",
    marginLeft: 12,
  },
});
