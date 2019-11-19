import axios from "axios";

export const getArticles = params => {
  return axios
    .get("https://nc-news-hkeyes.herokuapp.com/api/articles", {
      headers: { Authorization: `Bearer test` },
      params
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return axios
    .get("https://nc-news-hkeyes.herokuapp.com/api/topics", {
      headers: { Authorization: `Bearer test` }
    })
    .then(({ data }) => {
      return data.topics;
    });
};

export const getArticleById = id => {
  return axios
    .get(`https://nc-news-hkeyes.herokuapp.com/api/articles/${id}`, {
      headers: { Authorization: `Bearer test` }
    })
    .then(({ data }) => {
      return data.article;
    });
};

export const getCommentsByArticleId = id => {
  return axios
    .get(`https://nc-news-hkeyes.herokuapp.com/api/articles/${id}/comments`, {
      headers: { Authorization: `Bearer test` }
    })
    .then(({ data }) => {
      return data.comments;
    });
};

export const postComment = (id, body) => {
  return axios
    .post(
      `https://nc-news-hkeyes.herokuapp.com/api/articles/${id}/comments`,
      {
        body,
        username: "jessjelly"
      },
      {
        headers: { Authorization: `Bearer test` }
      }
    )
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = id => {
  return axios.delete(
    `https://nc-news-hkeyes.herokuapp.com/api/comments/${id}`,
    {
      headers: { Authorization: `Bearer test` }
    }
  );
};

export const deleteArticle = id => {
  return axios.delete(
    `https://nc-news-hkeyes.herokuapp.com/api/articles/${id}`,
    {
      headers: { Authorization: `Bearer test` }
    }
  );
};
