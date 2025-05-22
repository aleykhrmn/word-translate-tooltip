import React, { useState } from "react";
import { getTranslation } from "./api";

const TextDisplay = ({ text }) => {
  const [tooltip, setTooltip] = useState({ word: "", translation: "", visible: false });

  const handleHover = async (word) => {
    const cleaned = word.replace(/[^a-zA-Z]/g, "");
    if (!cleaned) return;
    const translation = await getTranslation(cleaned);
    setTooltip({ word: cleaned, translation, visible: true });
  };

  const handleLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const words = text.split(/\s+/);

  return (
    <div style={{ lineHeight: "2em", marginTop: "1rem", maxWidth: "800px" }}>
      {words.map((word, i) => (
        <span
          key={i}
          onMouseEnter={() => handleHover(word)}
          onMouseLeave={handleLeave}
          style={{
            marginRight: "6px",
            position: "relative",
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          {word}
          {tooltip.visible && tooltip.word === word.replace(/[^a-zA-Z]/g, "") && (
            <div
              style={{
                position: "absolute",
                top: "1.5em",
                background: "#fff9c4",
                border: "1px solid #ccc",
                padding: "6px 10px",
                borderRadius: "6px",
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
                zIndex: 10,
              }}
            >
              <strong>{tooltip.word}</strong>: {tooltip.translation}
            </div>
          )}
        </span>
      ))}
    </div>
  );
};

export default TextDisplay;
