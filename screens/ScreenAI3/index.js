import React from "react";
import { View, StyleSheet, Image, FlatList, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const data = [{
  id: "1",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "2",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "3",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "4",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "5",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "6",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "7",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "8",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "9",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "10",
  image: "https://tinyurl.com/42evm3m3"
}];

const ImageGalleryScreen = () => {
  const renderItem = ({
    item
  }) => <Image source={{
    uri: item.image
  }} style={styles.image} />;

  const renderHeader = () => <View style={styles.header}>
      <MaterialCommunityIcons name="menu" size={24} color="black" />
      <Text style={styles.headerText}>Image Gallery</Text>
      <MaterialCommunityIcons name="image-multiple" size={24} color="black" />
    </View>;

  const renderFooter = () => <View style={styles.footer}>
      <MaterialCommunityIcons name="image-plus" size={24} color="black" />
      <Text style={styles.footerText}>End of Gallery</Text>
      <MaterialCommunityIcons name="settings" size={24} color="black" />
    </View>;

  return <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} numColumns={3} contentContainerStyle={styles.contentContainer} ListHeaderComponent={renderHeader} ListFooterComponent={renderFooter} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16
  },
  contentContainer: {
    paddingBottom: 16
  },
  image: {
    width: "32%",
    aspectRatio: 1,
    margin: 4,
    borderRadius: 8
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16
  },
  footerText: {
    fontSize: 16,
    fontStyle: "italic"
  }
});
export default ImageGalleryScreen;