import React, { useState } from "react";
import FileUpload from "./FileUpload";
import TextDisplay from "./TextDisplay";

function App() {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>📄 İngilizce Belge Üzerinden Türkçe Anlam Gösterimi</h2>
      <FileUpload onFileLoaded={setText} />
      {text && (
        <div style={{ marginTop: "20px" }}>
          <h3>Metin:</h3>
          <TextDisplay text={text} />
        </div>
      )}
    </div>
  );
}

export default App;
