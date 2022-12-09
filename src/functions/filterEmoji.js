import emojiList from "../emojiList.json";

const filterEmoji = (SearchText, maxResults) => {
  return emojiList
    .filter((emoji) => {
      if (emoji.title.toLowerCase().includes(SearchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(SearchText.toLowerCase())) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
};

export default filterEmoji;
