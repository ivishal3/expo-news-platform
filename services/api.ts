// const BASE_URL = "https://newsdata.io/api/1";
// const API_KEY = "adads";

// // const newsDataTransform = (response) => {
// //   return response?.results
// //     ? {
// //         ...response,
// //         results: response.results.map((article, index) => ({
// //           id: article.article_id || index,
// //           title: article.title,
// //           description: article.description,
// //           source: article.source_id,
// //           link: article.link,
// //           image_url: article.image_url,
// //           pubDate: article.pubDate,
// //         })),
// //       }
// //     : {};
// // };

// const fetchJson = async (url) => {
//   try {
//     const response = await axios.get(url);
//     if (!response.ok) throw new Error(`Network response: ${response.status}`);
//     return response.data;
//   } catch (error) {
//     console.error("API fetch error:", error);
//     throw error;
//   }
// };

// export const getNewsList = async (category = "") => {
//   try {
//     const categorySearch = category ? `&category=${category}` : "";
//     const url = `${BASE_URL}?apikey=${API}${categorySearch}&language=en&image=1&removeduplicate=1&size=10`;
//     const json = await fetchJson(url);
//     return newsDataTransform(json);
//   } catch (error) {
//     console.error("Error fetching news list:", error);
//     throw error;
//   }
// };

// export const useNewsList = (category = "") => {
//   const { data, status, isLoading, isFetching, isError } = useQuery({
//     queryKey: ["newsList", category],
//     queryFn: () => getNewsList(category),
//     staleTime: 1000 * 60 * 5, // 5 minutes
//   });

//   return { data, status, isLoading, isFetching, isError };
// };

// const {
//   data,
//   isLoading: loadingNews,
//   isFetching: fetchingNews,
//   isError: errorNews,
// } = useNewsList("technology");
