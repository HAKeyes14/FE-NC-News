import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://nc-news-hkeyes.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return axios
    .get("https://nc-news-hkeyes.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};
