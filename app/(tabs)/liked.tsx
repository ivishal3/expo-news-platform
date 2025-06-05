import { NewsListItem } from "@/components/NewsCategories";
import { Colors } from "@/constants/Colors";
import { getLocalStorage } from "@/services/localStorage";
import { NewNewsDataType } from "@/types";
import { Text } from "@react-navigation/elements";
import { useIsFocused } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const Page = () => {
  const [newsList, setNewsList] = useState<NewNewsDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    fetchSavedArticles();
  }, [isFocused]);

  const fetchSavedArticles = async () => {
    setIsLoading(true);
    const saved = getLocalStorage("savedArticle") || [];
    if (!Array.isArray(saved) || saved.length === 0) {
      setNewsList([]);
      setIsLoading(false);
      return;
    }

    const query_id = saved.join(",");
    try {
      const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&id=${query_id}`;
      const response = await fetch(URL);
      const data = await response.json();
      setNewsList(data.results || []);
    } catch (error) {
      console.error("Error fetching saved articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No saved articles yet.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>❤️ Liked Articles</Text>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={Colors.tint}
          style={styles.loader}
        />
      ) : newsList.length === 0 ? (
        renderEmptyState()
      ) : (
        <FlatList
          data={newsList}
          keyExtractor={(item) => item.article_id}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/news/[id]",
                  params: { id: item.article_id },
                })
              }>
              <NewsListItem item={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: Colors.tint,
    marginBottom: 20,
  },
  loader: {
    marginTop: 60,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 18,
    color: "#999",
  },
});
