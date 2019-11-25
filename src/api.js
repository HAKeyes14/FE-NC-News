import axios from "axios";

export const getArticles = async params => {
  const { data } = await axios.get(
    "https://nc-news-hkeyes.herokuapp.com/api/articles",
    {
      headers: { Authorization: `Bearer test` },
      params
    }
  );
  return { articles: data.articles, total_count: data.total_count };
};

export const getTopics = async () => {
  const { data } = await axios.get(
    "https://nc-news-hkeyes.herokuapp.com/api/topics",
    {
      headers: { Authorization: `Bearer test` }
    }
  );
  return data.topics;
};

export const getArticleById = async id => {
  const { data } = await axios.get(
    `https://nc-news-hkeyes.herokuapp.com/api/articles/${id}`,
    {
      headers: { Authorization: `Bearer test` }
    }
  );
  return data.article;
};

export const getCommentsByArticleId = async (id, sort_by) => {
  const { data } = await axios.get(
    `https://nc-news-hkeyes.herokuapp.com/api/articles/${id}/comments`,
    {
      headers: { Authorization: `Bearer test` },
      params: { sort_by }
    }
  );
  return data.comments;
};

export const postComment = async (id, body, loggedInUser) => {
  const { data } = await axios.post(
    `https://nc-news-hkeyes.herokuapp.com/api/articles/${id}/comments`,
    {
      body,
      username: loggedInUser
    },
    {
      headers: { Authorization: `Bearer test` }
    }
  );
  return data.comment;
};

export const deleteComment = async id => {
  const data = await axios.delete(
    `https://nc-news-hkeyes.herokuapp.com/api/comments/${id}`,
    {
      headers: { Authorization: `Bearer test` }
    }
  );
  return data.status;
};

export const deleteArticle = async id => {
  const data = await axios.delete(
    `https://nc-news-hkeyes.herokuapp.com/api/articles/${id}`,
    {
      headers: { Authorization: `Bearer test` }
    }
  );
  return data.status;
};

export const getUserById = async username => {
  const { data } = await axios.get(
    `https://nc-news-hkeyes.herokuapp.com/api/users/${username}`,
    {
      headers: { Authorization: `Bearer test` }
    }
  );
  return data.user;
};

export const updateVotes = async (commArt, id, votes) => {
  const { data } = await axios.patch(
    `https://nc-news-hkeyes.herokuapp.com/api/${commArt}/${id}`,
    {
      inc_votes: votes
    },
    {
      headers: { Authorization: `Bearer test` }
    }
  );
  return data;
};
