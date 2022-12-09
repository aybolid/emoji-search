import React from "react";
import PropTypes from "prop-types";
import EmojiResultRow from "../EmojiResultRow/EmojiResultRow";
import { EmojiResultsDiv } from "./EmojiResults.elements";

const EmojiResults = (props) => {
  return (
    <EmojiResultsDiv>
      {props.emojiData.map((emojiData) => (
        <EmojiResultRow
          key={emojiData.title}
          symbol={emojiData.symbol}
          title={emojiData.title}
        />
      ))}
    </EmojiResultsDiv>
  );
};

EmojiResults.propTypes = {
  emojiData: PropTypes.array,
};

export default EmojiResults;
