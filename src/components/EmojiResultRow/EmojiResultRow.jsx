import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  EmojiImg,
  EmojiInfo,
  EmojiTitle,
  ResultRow,
} from "./EmojiResultRow.elements";
import { CopyToClipboard } from "react-copy-to-clipboard";

const EmojiResultRow = (props) => {
  const codePointHex = props.symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(() => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }, []);

  return (
    <CopyToClipboard onCopy={onCopy} text={props.symbol}>
      <ResultRow>
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <EmojiImg alt={props.title} src={src} />
          <EmojiTitle>{props.title}</EmojiTitle>
        </div>
        <EmojiInfo>
          {copied ? (
            <span style={copiedStyle}>Copied!</span>
          ) : (
            <span>Click to copy Emoji</span>
          )}
        </EmojiInfo>
      </ResultRow>
    </CopyToClipboard>
  );
};

const copiedStyle = {
  display: "block",
  color: "#33ffaa",
  backgroundColor: "#33ffaa33",
  width: "300px",
};

EmojiResultRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};

export default EmojiResultRow;
