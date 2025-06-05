import { Colors } from "@/constants/Colors";
import { getLocalStorage, setLocalStorage } from "@/services/localStorage";
import { NewNewsDataType } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { router, Stack, useLocalSearchParams } from "expo-router";
import Moment from "moment";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const NewsPage = () => {
  const [news, setNews] = useState<NewNewsDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (!isLoading && news) {
      checkIfSaved(news.article_id);
    }
  }, [isLoading, news]);

  const fetchNews = async () => {
    try {
      const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&id=${id}`;
      const response = await axios.get(URL);
      const result = response?.data?.results?.[0];
      if (result) {
        setNews(result);
      }
    } catch (error: any) {
      console.log("Error fetching news:", error.message);
      Alert.alert("Error", "Failed to fetch news. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const checkIfSaved = (newsID: string) => {
    const savedArticles = getLocalStorage("savedArticle") || [];
    if (Array.isArray(savedArticles) && savedArticles.includes(newsID)) {
      setLiked(true);
    }
  };

  const toggleSaveArticle = () => {
    if (!news) return;

    const newsID = news.article_id;
    let savedArticles = getLocalStorage("savedArticle") || [];

    if (!Array.isArray(savedArticles)) savedArticles = [];

    if (savedArticles.includes(newsID)) {
      // Remove
      const updated = savedArticles.filter((id: string) => id !== newsID);
      setLocalStorage("savedArticle", updated);
      setLiked(false);
      Alert.alert("Removed", "Article removed from saved list.");
    } else {
      // Save
      savedArticles.push(newsID);
      setLocalStorage("savedArticle", savedArticles);
      setLiked(true);
      Alert.alert("Saved", "Article saved successfully.");
    }
  };

  const renderContent = () => {
    if (!news) return null;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{news.title}</Text>
          <View style={styles.newsInfo}>
            <Text style={styles.infoText}>
              {Moment(news.pubDate).format("MMMM DD, YYYY hh:mm A")}
            </Text>
            <Text style={styles.infoText}>{news.source_name}</Text>
          </View>
          {news.image_url && (
            <Image source={{ uri: news.image_url }} style={styles.img} />
          )}
          <Text style={styles.contentStyle}>
            {news.description || news.content || "No content available."}
          </Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
          ),
          headerRight: () =>
            news ? (
              <TouchableOpacity onPress={toggleSaveArticle}>
                <Ionicons
                  name={liked ? "heart" : "heart-outline"}
                  size={25}
                  color={liked ? "red" : "black"}
                />
              </TouchableOpacity>
            ) : null,
        }}
      />
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.tint} />
        </View>
      ) : (
        renderContent()
      )}
    </>
  );
};

export default NewsPage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: Colors.bgLight || "#F4F4F4",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.bgLight || "#F4F4F4",
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.tint,
    marginBottom: 12,
  },
  newsInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  infoText: {
    fontSize: 13,
    color: Colors.grey || "#666",
  },
  img: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
    resizeMode: "cover",
  },
  contentStyle: {
    fontSize: 16,
    lineHeight: 26,
    color: Colors.darkGrey,
    textAlign: "justify",
  },
});
