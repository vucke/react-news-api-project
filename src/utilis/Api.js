import axios from "axios";

import { selectFields } from "../selectors/selectFields";

export const ApiUrl = "https://hacker-news.firebaseio.com/v0/";
export const storyUrl = `${ApiUrl}item/`;

// getStoryids is fetching ids and type is paramtear that is pased from page

export const getStoryIds = async (type) => {
  const result = await axios.get(`${ApiUrl + type}stories.json`);

  return result.data;
};

//After we fetch ids we then fetch stories from those ids

export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl + storyId}.json`);

  return selectFields(result.data);
};
