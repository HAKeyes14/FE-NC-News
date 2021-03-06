import axios from "axios";

export const getArticles = async params => {
  const { data } = await axios.get(
    "https://nc-news-hkeyes.herokuapp.com/api/articles",
    {
      params
    }
  );
  return { articles: data.articles, total_count: data.total_count };
};

export const getTopics = async () => {
  const { data } = await axios.get(
    "https://nc-news-hkeyes.herokuapp.com/api/topics"
  );
  return data.topics;
};

export const getArticleById = async id => {
  const { data } = await axios.get(
    `https://nc-news-hkeyes.herokuapp.com/api/articles/${id}`
  );
  return data.article;
};

export const getCommentsByArticleId = async (id, sort_by) => {
  const { data } = await axios.get(
    `https://nc-news-hkeyes.herokuapp.com/api/articles/${id}/comments`,
    {
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
    }
  );
  return data.comment;
};

export const deleteComment = async id => {
  const data = await axios.delete(
    `https://nc-news-hkeyes.herokuapp.com/api/comments/${id}`
  );
  return data.status;
};

export const deleteArticle = async id => {
  const data = await axios.delete(
    `https://nc-news-hkeyes.herokuapp.com/api/articles/${id}`
  );
  return data.status;
};

export const getUserById = async username => {
  const { data } = await axios.get(
    `https://nc-news-hkeyes.herokuapp.com/api/users/${username}`
  );
  return data.user;
};

export const updateVotes = async (commArt, id, votes) => {
  const { data } = await axios.patch(
    `https://nc-news-hkeyes.herokuapp.com/api/${commArt}/${id}`,
    {
      inc_votes: votes
    }
  );
  return data;
};
