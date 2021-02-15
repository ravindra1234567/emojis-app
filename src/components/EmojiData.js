const EmojiData = ({ chosenEmoji }) => (
    <div>
      <strong>Unified:</strong> {chosenEmoji.unified}
      <br />
      <strong>Names:</strong> {chosenEmoji.names.join(", ")}
      <br />
      <strong>Symbol:</strong> {chosenEmoji.emoji}
      <br />
      <strong>ActiveSkinTone:</strong> {chosenEmoji.activeSkinTone}
    </div>
  );

  export default EmojiData;