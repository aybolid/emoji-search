import { useState } from "react";
import "./App.css";
import EmojiResults from "./components/EmojiResults/EmojiResults";
import SearchInput from "./components/SearchInput/SearchInput";
import filterEmoji from "./functions/filterEmoji";

function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji("smile", 20));

  const handleSearchChange = (event) => {
    setTimeout(() => {
      setFilteredEmoji(filterEmoji(event.target.value, 20));
    }, 1000);
  };

  return (
    <div className="App">
      <h1 style={{ userSelect: "none" }}>😀 Emoji Search 😍</h1>
      <SearchInput searchText={(event) => handleSearchChange(event)} />
      {filteredEmoji.length === 0 ? (
        <p style={{ fontSize: 23 }}>Hmm... Nothing was found</p>
      ) : (
        <EmojiResults emojiData={filteredEmoji} />
      )}
    </div>
  );
}
export default App;
