import './App.css';
import React, { useState } from "react";
import { render } from "react-dom";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import EmojiData from "./components/EmojiData"

function App() {

  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  return (
    <div>
     <Picker
        onEmojiClick={onEmojiClick}
        disableAutoFocus={true}
        skinTone={SKIN_TONE_MEDIUM_DARK}
        groupNames={{ smileys_people: "PEOPLE" }}
        native
      />
      {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}
    </div>
  );
}

export default App;
